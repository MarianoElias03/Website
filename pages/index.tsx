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
    <main className={styles.main}>
    <section className={styles.Jumbotron}>
    
      <div className={styles.coverBanner}>
        <div className="row py-lg-5 bg-transparent">
          <div className="top-50 col-lg-6 col-md-8 mx-auto mx-lg-5 bg-transparent position-absolute start-0">
            <h1 className="fw-bold text-white bg-transparent">Hi I&apos;m Mariano Lovo</h1>
            <p className="lead fw-medium text-white bg-transparent">I am a web developer, I create freelance websites for commercial services, ecommerce platforms and media managers!</p>
            <p className='bg-transparent'>
              <a href="#" className="btn border text-white my-2">Request a site!</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="album py-5 border-bottom" id='Project Cards'>
      <div className="container-fluid">

        <div  className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 p-4">

          <a href="https://Wriality.com" target='_blank' rel="noreferrer">
            <div className="col">
              <div className="card shadow-sm p-1">
                <Image src="/wriality.svg" className="bd-placeholder-img card-img-top bg-white border-bottom" width={100} height={225} alt="Wriality" />
                <div className="card-body">
                  <p className="card-text fs-5">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text">Technology Used</p>
                  <div className="d-flex justify-content-between align-items-center">
                  <div className="row">
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width={50} height={50} alt='Bootstrap' className='col m-1'/>  
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width={50} height={50} alt='Next' className='col m-1' />
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width={50} height={50} alt='Javascript' className='col m-1'/>
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  width={50} height={50} alt='HTML' className='col m-1'/>
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width={50} height={50} alt='CSS' className='col m-1'/>
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" width={50} height={50} alt='GraphQL' className='col m-1'/>
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          
          <a href="https://punchclean.com" target='_blank' rel="noreferrer">
            <div className="col">
              <div className="card shadow-sm p-1">
                <Image src="/PunchClean 1.svg" className="bd-placeholder-img card-img-top border-bottom" width={100} height={225} alt="Punchclean Powerwashers Label"/>
                <div className="card-body">
                  <p className="card-text fs-5">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text">Technology Used</p>
                  <div className="d-flex justify-content-between align-items-center">
                  <div className="row">
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width={50} height={50} alt='Bootstrap' className='col m-1'/>  
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width={50} height={50} alt='Next' className='col m-1' />
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width={50} height={50} alt='Javascript' className='col m-1'/>
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  width={50} height={50} alt='HTML' className='col m-1'/>
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width={50} height={50} alt='CSS' className='col m-1'/>
                      <span className='col m-1'></span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="https://www.runnersrecovers.com" target='_blank' rel="noreferrer">
            <div className="col">
              <div className="card shadow-sm p-1">
                <Image src="/Runners-Recovers-Icon-2.svg" className=" card-img-top border-bottom" width={100} height={225} alt="Placeholder: Thumbnail" />
                <div className="card-body">
                  <p className="card-text fs-5">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text">Technology Used</p>
                  <div className="d-flex justify-content-between align-items-center">
                    
                    <div className="row">
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width={50} height={50} alt='Bootstrap' className='col m-1'/>  
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width={50} height={50} alt='Next' className='col m-1' />
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width={50} height={50} alt='Javascript' className='col m-1'/>
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  width={50} height={50} alt='HTML' className='col m-1'/>
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width={50} height={50} alt='CSS' className='col m-1'/>
                      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" width={50} height={50} alt='GraphQL' className='col m-1'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div id="About Me" className='py-5 px-4 border-bottom'>
      <div className=''>
        <div className=" py-1 px-3 mx-3">
            <h2 className=" fs-1 pb-2">About Me</h2>
            <p className='fs-5'>Hello, I&apos;m Mariano, a passionate software developer hailing from Brisbane, Australia with a Latin-American heritage. As a self-taught professional, I&apos;ve delved deep into the intricacies of software development, dedicating countless hours every day to mastering my craft. I never let a day go by without immersing myself in the world of development.<br/> <br/>
                                
                                This balance has not only honed my problem-solving skills but also cultivated a resilience and dedication that I bring to every project. My experiences have taught me to adapt, innovate, and deliver top-notch solutions even in challenging environments. <br/> <br/>

                                I&apos;m proud to be AWS Foundational Cloud Practitioner certified, showcasing my understanding and proficiency with cloud technologies, especially AWS services. It&apos;s not just about certificates for me; it&apos;s about the relentless pursuit of knowledge and the application of that knowledge to real-world challenges. <br/> <br/>

                                Every team I&apos;ve been a part of has benefited from my commitment to excellence, collaborative spirit, and unwavering dedication. I believe in continuous learning and always strive to exceed both personal and professional qualifications. <br/> <br/>

                                Whether it&apos;s a small task or a large-scale project, I approach it with the same enthusiasm and precision. If you&apos;re looking for someone who can deliver high-quality software solutions and is dedicated to exceeding expectations, I&apos;d love to hear from you. <br /> <br/>
                                
                                Looking forward to collaborating and making a difference together!
            </p> 
            <a href="https://www.credly.com/badges/9480ff0a-0fc1-4c0b-8ffd-27d23453bb47/public_url" target="__blank">
              <Image src="/AWS-Certified-Cloud-Practitioner_badge.png"  width={150} height={150} alt='AWS Cloud Practitioner' className='col m-1'/>
            </a>
          </div>
        </div>
      </div>

    <div id='contact' className='row py-5 px-4'>
      <h2 className='py-1 px-3 mx-3 fs-1'>Contact Me!</h2>
      <Image src="/ContactStock.svg" width={100} height={450} alt='Contact Us' className='col w-100'/>
      <div className="col">
      <form className={styles.submitformcont}  method="post" onSubmit={sendEmail} id='emailform'>
                  <label className="mb-1" htmlFor="name">Name:</label>
                  <br/>
                  <input className="form-control" type="text" id="name" placeholder='Name'  name="name" />
                  <br/>
                  <br/>
                  <label className="mb-1" htmlFor="mail">E-mail: <a className="text-danger fw-bold">*</a></label>
                  <br/>
                  <input className="form-control" type="email" id="mail" name="email" placeholder="name@example.com" required/>
                  <br/>
                  <br/>
                  <label className="mb-1" htmlFor="msg">Message:</label>
                  <textarea className="form-control col-8"/>
                  <br/>
                  <button className="btn btn-primary"> Submit </button>
            </form>
      </div>
      
    </div>

    </main>
    )
  }