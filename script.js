// Função para mostrar/ocultar o formulário de adição de vídeo
function toggleVideoForm(topicId) {
    const form = document.getElementById(`video-form-${topicId}`);
    if (form.style.display === 'block') {
        form.style.display = 'none';
    } else {
        form.style.display = 'block';
    }
}

// Função para adicionar um vídeo a um tópico
function addVideo(topicId) {
    const titleInput = document.getElementById(`video-title-${topicId}`);
    const urlInput = document.getElementById(`video-url-${topicId}`);
    
    const title = titleInput.value.trim();
    const url = urlInput.value.trim();
    
    if (!title || !url) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Validar se é uma URL do YouTube
    if (!isValidYouTubeUrl(url)) {
        alert('Por favor, insira uma URL válida do YouTube no formato embed.');
        return;
    }
    
    // Criar o elemento de vídeo
    const videoContainer = document.getElementById(`video-container-${topicId}`);
    videoContainer.innerHTML = `
        <h4>${title}</h4>
        <div class="video-wrapper">
            <iframe width="100%" height="400" src="${url}" frameborder="0" allowfullscreen></iframe>
        </div>
        <div style="margin-top: 1rem;">
            <button class="btn btn-danger" onclick="removeVideo('${topicId}')">Remover Vídeo</button>
        </div>
    `;
    
    // Ocultar o formulário
    document.getElementById(`video-form-${topicId}`).style.display = 'none';
    
    // Limpar os campos
    titleInput.value = '';
    urlInput.value = '';
    
    // Salvar no localStorage
    saveVideoToLocalStorage(topicId, title, url);
}

// Função para remover um vídeo
function removeVideo(topicId) {
    const videoContainer = document.getElementById(`video-container-${topicId}`);
    videoContainer.innerHTML = `
        <div class="video-placeholder">
            <p>Nenhum vídeo adicionado para este tópico.</p>
            <button class="btn" onclick="toggleVideoForm('${topicId}')">Adicionar Vídeo</button>
        </div>
    `;
    
    // Remover do localStorage
    localStorage.removeItem(`video-${topicId}`);
}

// Função para validar URL do YouTube
function isValidYouTubeUrl(url) {
    // Verifica se é uma URL de embed do YouTube
    const embedPattern = /^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+$/;
    return embedPattern.test(url);
}

// Função para salvar vídeo no localStorage
function saveVideoToLocalStorage(topicId, title, url) {
    const videoData = {
        title: title,
        url: url
    };
    localStorage.setItem(`video-${topicId}`, JSON.stringify(videoData));
}

// Função para carregar vídeos salvos do localStorage
function loadSavedVideos() {
    const topics = [
        '1', '1-1', '1-2', '2', '3', '4', '5', '6',
        'cts', 'cti', 'gestao', 'tics', 'metodologia'
    ];
    
    topics.forEach(topicId => {
        const savedVideo = localStorage.getItem(`video-${topicId}`);
        if (savedVideo) {
            const videoData = JSON.parse(savedVideo);
            const videoContainer = document.getElementById(`video-container-${topicId}`);
            
            if (videoContainer) {
                videoContainer.innerHTML = `
                    <h4>${videoData.title}</h4>
                    <div class="video-wrapper">
                        <iframe width="100%" height="400" src="${videoData.url}" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div style="margin-top: 1rem;">
                        <button class="btn btn-danger" onclick="removeVideo('${topicId}')">Remover Vídeo</button>
                    </div>
                `;
            }
        }
    });
}

// Carregar vídeos salvos quando a página for carregada
window.addEventListener('DOMContentLoaded', loadSavedVideos);