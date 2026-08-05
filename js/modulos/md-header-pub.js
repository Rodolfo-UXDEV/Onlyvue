export class MDHeaderpub extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link href="css/bootstrap.css" rel="stylesheet">
            
            <style>
                /* Garante que o dropdown fique acima de tudo */
                .dropdown-menu {
                    z-index: 1050; 
                    margin-top: 5px;
                }
                /* Garante que o ícone do menu mobile tenha cor */
                .navbar-toggler-icon {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
                }
            </style>

            <nav class="navbar navbar-light bg-white pb-3 pt-3">
                <div class="container">
                    <a class="navbar-brand" href="index.html">
                        <img src="media/logo-onlyvue.jpg" width="140" alt="Volkka Logo">
                    </a>
                </div>
            </nav>
        `;
    }

    connectedCallback() {
        // Verifica se o Bootstrap foi carregado no index.html (window)
        if (!window.bootstrap) {
            console.error('Bootstrap JS não encontrado na window. Importe o bootstrap.bundle.js no seu index.html');
            return;
        }

        // ======================================================
        // 1. CONFIGURAÇÃO DO DROPDOWN (Notificações)
        // ======================================================
        const notifBtn = this.shadowRoot.querySelector('#notifButton');
        const notifMenu = this.shadowRoot.querySelector('#notifMenu');

        if (notifBtn && notifMenu) {
            // Cria a instância manualmente
            const dropdown = new window.bootstrap.Dropdown(notifBtn, {
                popperConfig: function (defaultBsPopperConfig) {
                    // "fixed" ajuda a posicionar corretamente fora do fluxo normal do Shadow DOM
                    return { ...defaultBsPopperConfig, strategy: 'fixed' };
                }
            });

            // Toggle manual ao clicar
            notifBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Impede fechar imediatamente
                dropdown.toggle();
            });

            // Fecha o dropdown se clicar fora (simulação manual)
            // Nota: Adicionamos o listener na window para pegar cliques fora do componente
            window.addEventListener('click', (e) => {
                // Se o clique não foi dentro do botão nem do menu
                if (!e.composedPath().includes(notifBtn) && !e.composedPath().includes(notifMenu)) {
                    dropdown.hide();
                }
            });
        }

        // ======================================================
        // 2. CONFIGURAÇÃO DO OFFCANVAS (Menu Mobile)
        // ======================================================
        const offcanvasEl = this.shadowRoot.querySelector('#offcanvasNavbar');
        const btnOpenMobile = this.shadowRoot.querySelector('#mobileMenuBtn');
        const btnCloseMobile = this.shadowRoot.querySelector('#btnCloseMobile');

        if (offcanvasEl) {
            // Cria a instância do Offcanvas
            const bsOffcanvas = new window.bootstrap.Offcanvas(offcanvasEl);

            // ABRIR: Clique no hambúrguer
            if (btnOpenMobile) {
                btnOpenMobile.addEventListener('click', (e) => {
                    e.stopPropagation();
                    bsOffcanvas.show();
                });
            }

            // FECHAR: Clique no "X"
            if (btnCloseMobile) {
                btnCloseMobile.addEventListener('click', (e) => {
                    e.stopPropagation();
                    bsOffcanvas.hide();
                });
            }

            // FECHAR: Ao clicar em links dentro do menu (opcional, mas boa prática de UX)
            const links = offcanvasEl.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', () => bsOffcanvas.hide());
            });
        }

        // ======================================================
        // 3. EVENTO DE LOGIN
        // ======================================================
        const loginBtn = this.shadowRoot.querySelector('#login');
        if (loginBtn) {
            loginBtn.addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('loginRequisitado', { bubbles: true, composed: true }));
            });
        }
    }
}