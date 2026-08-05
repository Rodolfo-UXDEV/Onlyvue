export class MDHeaderinterna extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open'})
        this.shadowRoot.innerHTML = `
            <!-- CSS -->
            <link href="css/bootstrap.css" rel="stylesheet">
            <!---------------->
            <nav class="navbar pb-3 pt-3">
                <div class="container">
                    <a class="navbar-brand" href="index.html">
                        <img src="media/Logo-Principal.png" width="120" alt="">
                    </a>

                    <div class="d-flex align-items-center gap-3">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#areamembro" id="areamembro">
                            <svg height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path fill="#2b2b2b" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c10 0 18.8-4.9 24.2-12.5l-99.2-99.2c-14.9-14.9-23.3-35.1-23.3-56.1l0-33c-15.9-4.7-32.8-7.2-50.3-7.2l-91.4 0zM384 224c-17.7 0-32 14.3-32 32l0 82.7c0 17 6.7 33.3 18.7 45.3L478.1 491.3c18.7 18.7 49.1 18.7 67.9 0l73.4-73.4c18.7-18.7 18.7-49.1 0-67.9L512 242.7c-12-12-28.3-18.7-45.3-18.7L384 224zm24 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                            </svg>
                        </a>
                        <button type="button" class="fs-6 btn btn-red rounded-2 fw-medium px-3 py-2 d-flex align-items-center gap-2" onclick="window.location.href='publicaranuncio.html';">
                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.0289 3.70147L3.90961 5.8144C3.52006 6.20276 3.16272 6.55901 2.88053 6.88106C2.6993 7.08788 2.5182 7.31423 2.3648 7.56435L2.34415 7.54376C2.30495 7.50468 2.28533 7.48512 2.26565 7.46602C1.89729 7.10861 1.464 6.82444 0.988958 6.62872C0.963572 6.61826 0.937807 6.60805 0.886279 6.58763L0.570738 6.4626C0.143269 6.29322 0.0293434 5.74292 0.354612 5.41864C1.28812 4.48796 2.40892 3.37054 2.94983 3.14611C3.42687 2.94818 3.94219 2.88232 4.4392 2.95577C4.89458 3.02307 5.32538 3.25699 6.0289 3.70147Z" fill="white"></path>
                                <path d="M9.64757 14.8266C9.81834 14.9999 9.93177 15.1223 10.0343 15.2531C10.1696 15.4258 10.2906 15.6091 10.396 15.8014C10.5147 16.0178 10.6068 16.2489 10.7911 16.7113C10.9412 17.0876 11.4396 17.1871 11.7291 16.8985L11.7992 16.8287C12.7326 15.898 13.8534 14.7805 14.0785 14.2412C14.277 13.7656 14.3431 13.2519 14.2694 12.7563C14.2019 12.3024 13.9674 11.8729 13.5217 11.1717L11.3953 13.2917C10.9969 13.6889 10.6317 14.0531 10.3013 14.3384C10.1033 14.5093 9.88672 14.6802 9.64757 14.8266Z" fill="white"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5392 12.3797L15.4116 7.52195C16.1133 6.82235 16.4641 6.47256 16.6489 6.02774C16.8337 5.58293 16.8337 5.08825 16.8337 4.09889V3.62624C16.8337 2.10487 16.8337 1.34418 16.3597 0.871555C15.8856 0.398926 15.1227 0.398926 13.5967 0.398926H13.1227C12.1303 0.398926 11.6341 0.398926 11.188 0.583174C10.7418 0.767422 10.391 1.11722 9.6893 1.81681L4.81692 6.67457C3.99699 7.49204 3.48858 7.99892 3.29171 8.48849C3.22951 8.64318 3.19841 8.79614 3.19841 8.95663C3.19841 9.62503 3.73791 10.1629 4.81692 11.2387L4.96193 11.3833L6.6607 9.65916C6.90297 9.41328 7.29868 9.41035 7.54456 9.65262C7.79044 9.89488 7.79337 10.2906 7.5511 10.5365L5.84716 12.2658L5.96138 12.3797C7.04038 13.4555 7.57989 13.9934 8.2503 13.9934C8.39842 13.9934 8.54016 13.9671 8.68274 13.9146C9.18545 13.7294 9.69862 13.2178 10.5392 12.3797ZM12.8282 6.67493C12.1962 7.3051 11.1714 7.3051 10.5393 6.67493C9.90725 6.04476 9.90725 5.02305 10.5393 4.39288C11.1714 3.7627 12.1962 3.7627 12.8282 4.39288C13.4603 5.02305 13.4603 6.04476 12.8282 6.67493Z" fill="white"></path>
                            </svg>
                            <span class="d-none d-sm-block">
                                PUBLICAR SEU ANÚNCIO
                            </span>
                        </button>
                    </div>
                </div>
                <div class="container">
                    <hr class="w-100 border border-secondary-subtle border-0_5 opacity-50 mb-3">
                </div>
            </nav>

            <!-- JS -->
            <script src="js/bootstrap.bundle.js"></script>
            <!---------------->
        `
    }
    connectedCallback() {
        this.shadowRoot.querySelector('#areamembro').addEventListener('click', () => {
            // Avisa a página que o botão de area do membro foi clicado
            console.log('Header: Botão de area do membro clicado. Disparando evento "areaMembroRequisitado".');
            this.dispatchEvent(new CustomEvent('areaMembroRequisitado', {
                bubbles: true,
                composed: true // Essencial para o evento "escapar" do Shadow DOM
            }));
        });
    }   
}