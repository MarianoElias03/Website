import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
  //laptop viewport 1366px × 625px


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  async function sendEmail(e: any) {
    
    e.preventDefault();

    const formData = {} as { [key: string]: string };
    for (const field of e.currentTarget.elements) {
      if ( !field.name ) continue;
      formData[(field as HTMLFormElement).name] = (field as HTMLFormElement).value;
    };

    await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
    (document.getElementById('emailform') as HTMLFormElement).reset();
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Mariano Lovo</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>    
        <link rel="icon" href="/Icon.png" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navbar}>
            <h1 className={styles.title}><a href="#">ML</a></h1>
            <input className={styles.checkbox} type="checkbox" name="" id="nav-check" />
            <label htmlFor="nav-check" className={styles.burger}>
              <span></span>
              <span></span>
              <span></span>
            </label>
            <div className={styles.navlinks}>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href='#aboutme'>About me</a></li>
                <li><a href="#contactme">Contact Me</a></li>
              </ul>
            </div>
          </div>
        </nav>
        </header>
        <div className={styles.cover} id='home'>     
            <div className={styles.text}>
              <h1>Hi I&apos;m Mariano</h1>
              <h1>&</h1>
              <h1>I am a <div className={styles.words}>
                <span>Software Engineer</span>
                <span>Full Stack Developer</span>
                <span>Software Engineer</span>
                </div> 
              </h1>
              
            </div>
            <div className={styles.shape}>
              <span></span> 
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        <img className={styles.waves} src='/wave-150.svg' alt='waves'/>  
        <img className={styles.waves2} src='/wave-150-u.svg' alt='waves 2'/>
      <div className={styles.projects} >
        <h1 id='projects'>Projects</h1>
        <div className={styles.grid} >
          <a href='https://www.wriality.com/' target='_blank' rel='noreferrer'>
          <button className={styles.button}>
            <h3>Personal Blog</h3>
            <p>This will take you to Wriality, where you can access my personal blog, as well as other posts made by Chat-GPT3.
            </p>
          </button>
          </a>

          <a href='https://www.rugbystats.net/' target='_blank' rel='noreferrer'>
          <button className={styles.button}>
            <h3>NRL Statistics App</h3>
            <p>On this website you will be able to get the stats of every team and player throughout 2022 and 
              see a statistical representation</p>
          </button>
          </a>
          <button className={styles.button}>
            <h3>More Coming Soon....</h3>
            <p> As a devleoper I am always looking for more projects to pursue, from games to ecommerce, there is nothing I
             won&apos;t pursue, stay tuned to see what&apos;s next.
            </p>
          </button>
        </div>
      </div>
      <div className={styles.aboutMe} >
        <div className={styles.mebox}>
          <div className={styles.bio}>
          <h1 id='aboutme'>About Me</h1>
          <p>I am a self taught developer, born in Brisbane, Australia with a Latin-American Background. I have always loved software and have prided myself on being a problem solver. 
            I study development everyday staying truly dedicated to it, whilst currently working as a collections agent. 
            I truly am an asset to any team I am apart of, I look forward to your contact.
          </p> 
          </div>
          
          <div className={styles.skillbox}>
            <span className={styles.skills}>
              <h2>Front-End Skills</h2>
                <p>Experience using: </p>
              <div className={styles.listGrid}>
                <p>
                  <span>
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'/>
                  </span>
                  <br/>
                  <span>
                    JavaScript
                  </span>
                </p>
                <p>
                  <span>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /></span>
                <br/>
                <span>TypeScript</span>
                </p>
                <p>
                  <span>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></span>
                <br/>
                <span>React.JS</span>
                </p>
                <p>
                  <span>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" /></span>
                <br/>
                <span>Next.JS</span>
                </p>
              
                <p>
                  <span>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /></span>
                  <br/>
                  <span>CSS</span>
                </p>
                <p>
                  <span>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /></span>
                  <br/>
                  <span>HTML</span>
                </p>
                <p>
                  <span>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" /></span>
                  <br/>
                  <span>SASS</span>
                </p>
                  
                
              </div>
            </span>
            <span className={styles.skills}> 
              <h2>Back-End Skills</h2>
                <p>Experience using: </p>
              <div className={styles.listGrid}>
              <p>
                  <span>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                  </span>
                  <br/>
                  <span className={styles.undertext}>
                    Python
                  </span>
                </p>
              </div>
            </span>
            <span className={styles.skills}>
              <h2>Other Skills</h2>
                <p>Experience with:</p>
                <div className={styles.listGrid}>
                  <p>
                    <span>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" />
                    </span>
                    <br/>
                    <span className={styles.undertext}>
                    Premiere Pro
                    </span>
                  </p>
                  <p>
                    <span>      
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                    </span>
                    <br/>
                    <span>
                      Github
                    </span>
                  </p>
                  <p>
                    <span>      
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                    </span>
                    <br/>
                    <span>
                      Figma
                    </span>
                  </p>
                </div>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.contactme} > 
        <div className={styles.cgrid}>
          <div className={styles.seg}>
              <div className={styles.getstarted}>
                <h2 id='contactme'>
                  Lets Get Started!
                </h2>
                <img src='/AdobeStock.svg'/>
            </div>
          </div>
          <div className={styles.seg}>
            <form className={styles.submitformcont}  method="post" onSubmit={sendEmail} id='emailform'>
                  <label className={styles.fullnamelbl} htmlFor="name">Name:</label>
                  <br/>
                  <input className={styles.fullnamebtn} type="text" id="name" placeholder='Name'  name="name" />

                  <br/>
                  <br/>

                  <label className={styles.emaillbl} htmlFor="mail">E-mail:</label>
                  <br/>
                  <input className={styles.emailbtn}type="email" id="mail" name="email" placeholder="Enter your Email" required/>

                  <br/>
                  <br/>
                  <label className={styles.textlbl}htmlFor="msg">Message:</label>
                  <br/>
                  <textarea className={styles.textbtn} id="msg" name="message"  placeholder="Message"></textarea>

                  <br/>

                  <button className={styles.submitbtn}> Submit </button>
            </form>
          </div>
        </div>
      </div>
    </main>
    </div>
    )
  }