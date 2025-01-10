import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="https://www.facebook.com" target="blank">
              <img src="/imagens/fb.png" alt="facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="blank">
              <img src="/imagens/tw.png" alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="blank">
              <img src="/imagens/ig.png" alt="instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
};

export default Rodape;
