/**
 * =====================================
 * ARQUIVO: assets/js/modules/github.js
 * 
 * PROPÓSITO:
 * Módulo para integração com a API do GitHub.
 * Busca dados do perfil do usuário e atualiza a UI.
 * =====================================
 */

/**
 * Inicializa a busca e exibição das estatísticas do GitHub.
 */
export async function initGithubStats() {
    const reposElement = document.getElementById('github-repos');
    const username = 'Euuuller'; // Seu nome de usuário do GitHub

    if (!reposElement) return;

    try {
        // Busca dados do usuário via API pública do GitHub
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            throw new Error('Falha ao buscar dados do GitHub');
        }

        const data = await response.json();
        const publicRepos = data.public_repos;

        // Atualiza o elemento no HTML com o número real de repositórios
        if (publicRepos !== undefined) {
            reposElement.textContent = `${publicRepos}+ Projetos Públicos`;
            console.log(`✓ GitHub stats loaded: ${publicRepos} repos`);
        }
    } catch (error) {
        console.error('Erro ao buscar estatísticas do GitHub:', error);
        // O valor padrão no HTML servirá como fallback
    }
}
