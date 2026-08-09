export class MDFooter extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: 'open'})
        this.shadowRoot.innerHTML = `
            <!-- CSS -->
            <link href="css/bootstrap.css" rel="stylesheet">
            <!---------------->
            <div class="container">
                <hr class="container border border-secondary-subtle border-0_5 opacity-50 mb-5">
            </div>
            
            <footer>
                <div class="container d-flex align-items-start align-items-md-center flex-column flex-md-row">

                    <div class="d-flex flex-column">
                        <a href="#" class="text-decoration-none link-dark m-0 p-0">
                        <p class="fs-2 fw-semibold d-flex align-items-center gap-2 m-0 p-0">
                            <img src="media/logo-fogo-preto.png" width="20" alt="">
                            Onlyvue
                        </p>
                        </a>
                        <p class="fw-bold fs-7 bg-badge p-3 rounded-2 mt-1" style="width: 238px;">
                        <svg width="47" height="18" viewBox="0 0 47 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.18 9.64732C11.1769 9.64742 11.1755 9.64698 11.1755 9.64607L11.18 9.64732Z" fill="#323232"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M-0.00317383 0.0963287V17.1546H5.18948V10.2293H5.9828C6.45968 10.2293 6.79388 10.4709 7.04412 10.6518L7.0646 10.6667C7.26654 10.8125 7.53338 11.2134 7.64156 11.3956L10.7427 17.1546H16.5845C15.695 15.4172 13.916 11.9788 13.7718 11.7601C13.6437 11.5659 13.0145 10.6302 12.5097 10.2657C12.0946 9.96606 11.4938 9.73338 11.18 9.64732C11.1769 9.64742 11.1755 9.64698 11.1755 9.64607L11.18 9.64732C11.2186 9.64598 11.5126 9.55944 12.4736 9.20868C13.9521 8.66902 14.6012 7.42266 14.9257 6.73012C15.1853 6.17609 15.2142 5.05345 15.2142 4.32446H20.479V17.1546H25.6716V4.25156H32.7394L27.9795 17.1546H33.2442L34.0375 14.3116H40.0235L40.889 17.1546H46.298L39.9514 0.0963287H-0.00317383ZM35.1915 10.6667L37.0666 4.54315L38.9417 10.6667H35.1915ZM5.18948 3.52257V7.02171H7.64156C7.93004 7.02171 8.83155 6.87592 9.33639 6.58432C9.84123 6.29273 10.0215 5.49084 10.0215 5.19924C10.0215 4.90765 9.91335 4.39736 9.44457 3.95996C9.06954 3.61005 8.00216 3.52257 7.64156 3.52257H5.18948Z"
                            fill="#323232"></path>
                        </svg>
                        RESTRICTED TO ADULTS
                        </p>
                    </div>
                    <p class="fs-6 text-start text-gray ms-0 ms-md-4">
                        A <strong style="color: #0D7DD9;">OnlyVue</strong> é uma das maiores plataformas de publicidade para acompanhantes do mundo. A OF Boss transforma essa experiência em estratégia, marketing e monetização para creators de todo o mundo.
                    </p>
                </div>

                <div class="container">
                    <div class="row mt-4">

                        <div class="col-6 col-md-3">
                        <h5 class="h7 fw-bold mb-2">
                            Legal
                        </h5>
                        <ul class="list-unstyled">
                            <li class="mb-2">
                            <a href="termosdeuso.html" class="link-gray link-red:hover fw-light fs-7">
                                <span>Termos e Condições</span>
                            </a>
                            </li>
                            <li class="mb-2">
                            <a href="politicadeprivacidade.html" class="link-gray link-red:hover fw-light fs-7">
                                <span>Política de Privacidade</span>
                            </a>
                            </li>
                            <li class="mb-2">
                            <a href="politicadecookies.html" class="link-gray link-red:hover fw-light fs-7">
                                <span>Política de Cookies</span>
                            </a>
                            </li>
                        </ul>
                        </div>

                        <div class="col-6 col-md-3">
                        <h5 class="h7 fw-bold mb-2">
                            Suporte
                        </h5>
                        <ul class="list-unstyled">
                            <li class="mb-2">
                            <a href="faleconosco.html" class="link-gray link-red:hover fw-light fs-7">
                                <span>Fale conosco</span>
                            </a>
                            </li>
                            <li class="mb-2">
                            <a href="#" class="link-gray link-red:hover fw-light fs-7">
                                <span>Centro de Ajuda</span>
                            </a>
                            </li>
                            <li class="mb-2">
                            <a href="#" class="link-gray link-red:hover fw-light fs-7">
                                <span>Blog</span>
                            </a>
                            </li>
                        </ul>
                        </div>

                        <div class="col-6 col-md-3">
                        <h5 class="h7 fw-bold mb-2">
                            Segurança
                        </h5>
                        <ul class="list-unstyled">
                            <li class="mb-2">
                            <a href="#" class="link-gray link-red:hover fw-light fs-7">
                                <span>Como denunciar fraudes</span>
                            </a>
                            </li>
                        </ul>
                        </div>

                        <div class="col-6 col-md-3">
                        <h5 class="h7 fw-bold mb-2">
                            Pessoa Jurídica
                        </h5>
                        <ul class="list-unstyled">
                            <li class="mb-2">
                            <a href="#" class="link-gray link-red:hover fw-light fs-7">
                                <span>Rede Onlyvue</span>
                            </a>
                            </li>
                            <li class="mb-2">
                            <a href="#" class="link-gray link-red:hover fw-light fs-7">
                                <span>Nossos Produtos</span>
                            </a>
                            </li>
                        </ul>
                        </div>

                    </div>

                </div>

                <div class="container mt-1 d-flex justify-content-end" style="transform: translateY(50%);">
                    <button class="fs-7 border-1 rounded-2 py-3 px-4 border-secondary-subtle bg-white" role="button"
                        aria-label="Back to top" onclick="javascript:window.scrollTo({top: 0,behavior: 'smooth'})">
                        Voltar ao topo
                        <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.60845 6.09103C9.85252 5.84695 9.85252 5.45122 9.60845 5.20715L5.44178 1.04048C5.1977 0.796402 4.80197 0.796402 4.5579 1.04048L0.391229 5.20715C0.147152 5.45122 0.147152 5.84695 0.391229 6.09103C0.635306 6.33511 1.03104 6.33511 1.27511 6.09103L4.37484 2.99131L4.37484 9.81576C4.37484 10.4102 4.19137 11.3157 3.65929 12.0547C3.15017 12.7619 2.29614 13.3574 0.833171 13.3574C0.487993 13.3574 0.208171 13.6372 0.208171 13.9824C0.208171 14.3276 0.487993 14.6074 0.833171 14.6074C2.70354 14.6074 3.93284 13.8141 4.67371 12.7851C5.39164 11.788 5.62484 10.6102 5.62484 9.81576L5.62484 2.99131L8.72456 6.09103C8.96864 6.33511 9.36437 6.33511 9.60845 6.09103Z"
                            fill="black">
                        </path>
                        </svg>
                    </button>
                </div>

                <div class="bg-dark py-5">
                    <div class="container d-flex justify-content-center flex-column">
                        <div class="d-flex justify-content-center">
                            <a class="p-3" target="_blank" data-href="https://www.youtube.com/channel/UCEuH7bRlBuyuJRGQmoIl95A">
                                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.7609 3.93223C23.7609 3.93223 23.5266 2.27754 22.8047 1.55098C21.8906 0.594727 20.8688 0.590039 20.4 0.533789C17.0438 0.290039 12.0047 0.290039 12.0047 0.290039H11.9953C11.9953 0.290039 6.95625 0.290039 3.6 0.533789C3.13125 0.590039 2.10938 0.594727 1.19531 1.55098C0.473438 2.27754 0.24375 3.93223 0.24375 3.93223C0.24375 3.93223 0 5.87754 0 7.81816V9.63691C0 11.5775 0.239062 13.5229 0.239062 13.5229C0.239062 13.5229 0.473437 15.1775 1.19062 15.9041C2.10469 16.8604 3.30469 16.8275 3.83906 16.9307C5.76094 17.1135 12 17.1697 12 17.1697C12 17.1697 17.0438 17.1604 20.4 16.9213C20.8688 16.865 21.8906 16.8604 22.8047 15.9041C23.5266 15.1775 23.7609 13.5229 23.7609 13.5229C23.7609 13.5229 24 11.5822 24 9.63691V7.81816C24 5.87754 23.7609 3.93223 23.7609 3.93223ZM9.52031 11.8447V5.09941L16.0031 8.48379L9.52031 11.8447Z" fill="white"></path>
                                </svg>
                            </a>
                            <a class="p-3" target="_blank" data-href="https://Onlyvue.link/insta-br">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.89336C15.2063 2.89336 15.5859 2.90742 16.8469 2.96367C18.0188 3.01523 18.6516 3.21211 19.0734 3.37617C19.6313 3.5918 20.0344 3.8543 20.4516 4.27148C20.8734 4.69336 21.1313 5.0918 21.3469 5.64961C21.5109 6.07148 21.7078 6.70898 21.7594 7.87617C21.8156 9.1418 21.8297 9.52148 21.8297 12.723C21.8297 15.9293 21.8156 16.309 21.7594 17.5699C21.7078 18.7418 21.5109 19.3746 21.3469 19.7965C21.1313 20.3543 20.8688 20.7574 20.4516 21.1746C20.0297 21.5965 19.6313 21.8543 19.0734 22.0699C18.6516 22.234 18.0141 22.4309 16.8469 22.4824C15.5813 22.5387 15.2016 22.5527 12 22.5527C8.79375 22.5527 8.41406 22.5387 7.15313 22.4824C5.98125 22.4309 5.34844 22.234 4.92656 22.0699C4.36875 21.8543 3.96563 21.5918 3.54844 21.1746C3.12656 20.7527 2.86875 20.3543 2.65313 19.7965C2.48906 19.3746 2.29219 18.7371 2.24063 17.5699C2.18438 16.3043 2.17031 15.9246 2.17031 12.723C2.17031 9.5168 2.18438 9.13711 2.24063 7.87617C2.29219 6.7043 2.48906 6.07148 2.65313 5.64961C2.86875 5.0918 3.13125 4.68867 3.54844 4.27148C3.97031 3.84961 4.36875 3.5918 4.92656 3.37617C5.34844 3.21211 5.98594 3.01523 7.15313 2.96367C8.41406 2.90742 8.79375 2.89336 12 2.89336ZM12 0.732422C8.74219 0.732422 8.33438 0.746484 7.05469 0.802734C5.77969 0.858984 4.90313 1.06523 4.14375 1.36055C3.35156 1.66992 2.68125 2.07773 2.01563 2.74805C1.34531 3.41367 0.9375 4.08398 0.628125 4.87148C0.332812 5.63555 0.126563 6.50742 0.0703125 7.78242C0.0140625 9.0668 0 9.47461 0 12.7324C0 15.9902 0.0140625 16.398 0.0703125 17.6777C0.126563 18.9527 0.332812 19.8293 0.628125 20.5887C0.9375 21.3809 1.34531 22.0512 2.01563 22.7168C2.68125 23.3824 3.35156 23.7949 4.13906 24.0996C4.90313 24.3949 5.775 24.6012 7.05 24.6574C8.32969 24.7137 8.7375 24.7277 11.9953 24.7277C15.2531 24.7277 15.6609 24.7137 16.9406 24.6574C18.2156 24.6012 19.0922 24.3949 19.8516 24.0996C20.6391 23.7949 21.3094 23.3824 21.975 22.7168C22.6406 22.0512 23.0531 21.3809 23.3578 20.5934C23.6531 19.8293 23.8594 18.9574 23.9156 17.6824C23.9719 16.4027 23.9859 15.9949 23.9859 12.7371C23.9859 9.4793 23.9719 9.07148 23.9156 7.7918C23.8594 6.5168 23.6531 5.64023 23.3578 4.88086C23.0625 4.08398 22.6547 3.41367 21.9844 2.74805C21.3188 2.08242 20.6484 1.66992 19.8609 1.36523C19.0969 1.06992 18.225 0.863672 16.95 0.807422C15.6656 0.746484 15.2578 0.732422 12 0.732422Z" fill="white"></path>
                                <path d="M12 6.56836C8.59688 6.56836 5.83594 9.3293 5.83594 12.7324C5.83594 16.1355 8.59688 18.8965 12 18.8965C15.4031 18.8965 18.1641 16.1355 18.1641 12.7324C18.1641 9.3293 15.4031 6.56836 12 6.56836ZM12 16.7309C9.79219 16.7309 8.00156 14.9402 8.00156 12.7324C8.00156 10.5246 9.79219 8.73398 12 8.73398C14.2078 8.73398 15.9984 10.5246 15.9984 12.7324C15.9984 14.9402 14.2078 16.7309 12 16.7309Z" fill="white"></path>
                                <path d="M19.8469 6.32481C19.8469 7.12168 19.2 7.76387 18.4078 7.76387C17.6109 7.76387 16.9688 7.11699 16.9688 6.32481C16.9688 5.52793 17.6156 4.88574 18.4078 4.88574C19.2 4.88574 19.8469 5.53262 19.8469 6.32481Z" fill="white"></path>
                                </svg>
                            </a>
                            <a class="p-3" target="_blank" data-href="https://Onlyvue.link/twitterbrasil">
                                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.3263 0.63623H20.6998L13.3297 9.05972L22 20.5222H15.2112L9.89404 13.5703L3.80995 20.5222H0.434432L8.31743 11.5123L0 0.63623H6.96111L11.7674 6.99056L17.3263 0.63623ZM16.1423 18.503H18.0116L5.94539 2.54936H3.93946L16.1423 18.503Z" fill="white"></path>
                                </svg>
                            </a>
                            <a class="p-3" target="_blank" data-href="https://www.tiktok.com/@Onlyvuebrasil">
                                <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0725 0.732422H11.0278V17.0802C11.0278 19.0281 9.47219 20.6281 7.53626 20.6281C5.60034 20.6281 4.04469 19.0281 4.04469 17.0802C4.04469 15.1672 5.56577 13.602 7.43257 13.5324V9.42809C3.31872 9.49762 0 12.8716 0 17.0802C0 21.3238 3.38786 24.7324 7.57085 24.7324C11.7538 24.7324 15.1416 21.289 15.1416 17.0802V8.69762C16.6627 9.81069 18.5295 10.4716 20.5 10.5064V6.40199C17.4579 6.29764 15.0725 3.79329 15.0725 0.732422Z" fill="white"></path>
                                </svg>
                            </a>
                            <a class="p-3" target="_blank" data-href="https://www.facebook.com/OnlyvueBrasil">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.732422C5.37264 0.732422 0 6.10506 0 12.7324C0 18.3599 3.87456 23.0822 9.10128 24.3791V16.3996H6.62688V12.7324H9.10128V11.1523C9.10128 7.06794 10.9498 5.17482 14.9597 5.17482C15.72 5.17482 17.0318 5.3241 17.5685 5.4729V8.7969C17.2853 8.76714 16.7933 8.75226 16.1822 8.75226C14.2147 8.75226 13.4544 9.4977 13.4544 11.4355V12.7324H17.3741L16.7006 16.3996H13.4544V24.6446C19.3963 23.927 24.0005 18.8678 24.0005 12.7324C24 6.10506 18.6274 0.732422 12 0.732422Z" fill="white"></path>
                                </svg>
                            </a>
                        </div>

                        <div>
                            <p class="text-center text-white fs-9">
                                Direitos autorais 2025 ©Onlyvue
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        `
    }
}