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

            <nav class="navbar navbar-light bg-white pb-3 pt-3 fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="index.html">
                        <img src="media/logo-onlyvue.png" width="140" alt="Volkka Logo">
                    </a>

                    <div class="d-flex align-items-center">

                        <div class="dropdown me-1">
                            <button class="btn btn-link position-relative" id="notifButton" type="button" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                                <path fill="#2b2b2b" d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/>
                                </svg>
                            </button>
                
                            <ul class="dropdown-menu dropdown-menu-end p-3" id="notifMenu" aria-labelledby="notifButton" style="min-width: 300px;">
                                <li class="m-0 p-0">
                                    <p class="fw-semibold fs-5 m-0 p-0">
                                        Notificações
                                    </p>
                                </li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <a href="#" class="text-decoration-none">
                                    <li class="d-flex justify-content-start align-items-center gap-2">
                                        <img src="media/logo-fogo-preto.png" height="30px" alt="">
                                        <div>
                                            <p class="fw-semibold fs-7 m-0 p-0 text-dark">Você ta preste a faturar 6 dígitos mensais com a onlyvue afiliasse agora.</p>
                                            <p class="fs-9 m-0 p-0 text-dark">há 1 semana</p>
                                        </div>
                                    </li>
                                </a>
                            </ul>
                        </div>

                    </div>
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