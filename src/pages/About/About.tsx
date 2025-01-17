import classNames from "classnames";
import styles from "./About.module.css";
import KeyValueDisplay from "./components/KeyValueDisplay/KeyValueDisplay";
import PillarCard from "./components/PillarCard/PillarCard";

function About() {
  const bullets = [
    { key: "Founded Nationally", value: "January 10th, 2012" },
    { key: "Founded at Northeastern University", value: "June 2024" },
    { key: "Motto", value: '"For the Love of Technology"' },
  ];

  const pillars = [
    {
      title: "Academic Support",
      content:
        "Kappa Theta Pi brothers strive to foster academic growth and excellence for each other. We provide a supportive network filled with some of the brightest tech minds at the university that members can always rely on for help in classes and extracurricular activities.",
    },
    {
      title: "Alumni Connections",
      content:
        "Our alumni are spread out across the world and work on cutting-edge technologies. They work at a plethora of companies - from tech companies like Microsoft, Amazon, Facebook, Apple, and Google, to startups, consulting firms, financial technology firms, and more!",
    },
    {
      title: "Professional Development",
      content:
        "Through events like interview training, resume building, one-on-one mentorship, private company recruiting, and more, Kappa Theta Pi Professional Development aims to prepare members for success in any technology-related career. We take pride in developing the tech leaders of the future.",
    },
    {
      title: "Social Growth",
      content:
        "The people you meet in Kappa Theta Pi will go on to be some of your closest friends throughout college and beyond. We host a variety of exclusive social events throughout the semester through which our members can bond, some of which include formal, tailgates, retreat, and apple picking.",
    },
    {
      title: "Technical Advancement",
      content:
        "Kappa Theta Pi provides members numerous opportunities to enhance their current technical skills, as well as learn new ones. Whether it be participation in one of our various project teams or attending a technical workshop, we make it easy for our members to expand their expertise.",
    },
  ];

  return (
    <div className={styles.contentWrapper}>
      <section className={classNames(styles.section, styles.historySection)}>
        <h2>History</h2>
        <div className={styles.historyContent}>
          <p>
            Kappa Theta Pi takes pride in being the first professional
            technology in the country, now coming to Northeastern University.
            Our members are passionate about technology and are dedicated to
            making a positive impact on the world. We are a community of
            like-minded individuals who share a love for technology and a desire
            to learn, grow, excel, and succeed together.
          </p>
          <p>
            Our community is made up of individuals from all across campus,
            including designers, analysts, computer scientists, engineers,
            artists, entrepreneurs, economists, philosophers, psychologists, and
            many others. The strength of KTP lies in our shared enthusiasm for
            technology and the way our diverse experiences blend into a unified
            whole.
          </p>
        </div>
        <div className={styles.historyBullets}>
          {bullets.map((b) => (
            <KeyValueDisplay key={b.key} title={b.key} value={b.value} />
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <figure>
          <img src="first-pc.png" alt="First PC" className={styles.Image} />
          <figcaption style={{ marginTop: "10px" }}>
            Fall '24 Pledge Class
          </figcaption>
        </figure>
      </section>
      <section className={styles.section}>
        <h2>Pillars</h2>
        <div className={styles.pillarsWrapper}>
          {pillars.map((p) => (
            <PillarCard key={p.title} title={p.title} content={p.content} />
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <figure>
          <img src="group-pic.png" alt="Initiation" className={styles.Image} />
          <figcaption style={{ marginTop: "10px" }}>
            Initiation Ceremony
          </figcaption>
        </figure>
      </section>
      {/* <section className={styles.section}>
        <h2>President's Welcome</h2>
        <div className={styles.welcomeContent}>
          <img
            src={KTPlogo}
            alt="President Image"
            className={styles.presidentImage}
          />
          <div className={styles.presidentText}>
            <p>
              Welcome to Kappa Theta Pi! We are thrilled to have you join our
              community. Our fraternity is dedicated to fostering academic and
              professional growth, providing a strong network of support, and
              creating lasting friendships. We believe in the power of
              technology to transform the world, and we are excited to see what
              you will contribute to our organization and beyond. Thank you for
              being a part of our journey.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default About;
