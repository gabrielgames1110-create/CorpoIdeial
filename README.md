# Academia Corpo Ideal — site

Site estático (HTML, CSS e JavaScript). Não precisa de instalação nem de build.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub (por exemplo `corpo-ideal`).
2. Envie todos os arquivos desta pasta para a raiz do repositório (**Add file → Upload files**, arraste tudo e confirme).
3. Vá em **Settings → Pages**. Em *Source* escolha **Deploy from a branch**, branch **main**, pasta **/ (root)** e clique em **Save**.
4. Em um ou dois minutos o site fica em `https://SEU-USUARIO.github.io/corpo-ideal/`.

## Editar
- **Textos, equipe, planos, horários e contatos:** `data.js`.
- **Cores:** `tema/tema.css`.
- **Fotos:** pasta `imagens/`. Substitua cada arquivo por outro com o mesmo nome (o tamanho ideal está escrito na imagem de exemplo).
- `js/site.js` e `css/site.css` são gerados a partir do design system: não precisam ser editados.

## Antes de publicar
- As fotos de `imagens/01` a `12` ainda são de exemplo.
- Nomes da equipe, CREF/CRN, preços, horários, endereço, telefone e e-mail em `data.js` são de exemplo.
- O formulário de matrícula e a newsletter não enviam dados. Para receber os contatos, ligue-os a um serviço de formulários (como Formspree) ou troque o botão por um link de WhatsApp.
