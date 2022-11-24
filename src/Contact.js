import styled from "styled-components";

const Contact = () => {
  return <Wrapper>
  <h2 className="common-heading">Feel Free to Contact Us</h2>
  <iframe title="Gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117907.62567470944!2d90.13066515!3d22.55615405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aaadbfd73a4729%3A0x61aec3afc5a54872!2sRajapur%20Upazila!5e0!3m2!1sen!2sbd!4v1668576708299!5m2!1sen!2sbd" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  <div className="container">
    <div className="contact-form">
      <form action="https://formspree.io/f/mgeqdnby" method="POST" className="contact-inputs">
        <input
          type="text"
          placeholder="username"
          name="username"
          required
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="Email"
          name="Email"
          required
          autoComplete="off"
        />
        <textarea name="Massage" cols="30" rows="10" required autoComplete="off" placeholder="Enter Your Massages">

        </textarea>
        <input type="submit" value="Send"/>
      </form>
    </div>
  </div>
</Wrapper>;
}
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;


;

export default Contact;
