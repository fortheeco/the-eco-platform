import { styles } from '../../style'
import bannerImg from '../assets/landingpage/ecoBannerImg.png'
import orgIcon from '../assets/org-icon.svg'
import userIcon from '../assets/user-octagon.svg'
import signupStyle from './signup.module.css'


export default function Intro() {
  return (
    <section className={`w-full gap-20 justify-between text-black relative mt-10 ${styles.flexCenter} ${styles.paddingX}`}>
        <article className={`w-full lg:w-1/2 rounded-lg border-t-4 lg:border-ecoGreen md:p-10 lg:shadow-lg ${signupStyle.globeContainer}`}>
            <div className="flex w-full capitalize bg-ecoGreen rounded-xl text-xl mb-20">
            <h6 className='w-1/2 flex items-center justify-center cursor-pointer p-3 bg-dimWhite rounded-xl text-ecoGreen'>login</h6>
            <h6 className='w-1/2 flex items-center justify-center cursor-pointer p-3'>signup</h6>
            </div>
            <h4 className={`text-2xl underline text-center my-6 block lg:text-3xl`}>Create an Account</h4>
            <div className="grid grid-cols-2 gap-3 md:gap-8 lg:gap-20 w-full justify-between mt-16">
              <div className="w-full aspect-square flex flex-col items-center justify-center gap-5 p-6 rounded-xl bg-white shadow-md">
                <img src={userIcon} alt="new user avatar" className='w-10 aspect-square mt-6 object-fill' />
                <h4 className=' md:text-xl lg:text-2xl uppercase'>individual</h4>
                <small className='capitalize text-base'>free</small>
              </div>
              <div className="w-full aspect-square flex flex-col items-center justify-center gap-5 p-6 rounded-xl bg-white shadow-md">
                <img src={orgIcon} alt="new organization avatar" className='w-10 aspect-square mt-6 object-fill' />
                <h4 className=' md:text-xl lg:text-2xl uppercase'>organization</h4>
                <small className='capitalize text-base'>19,999</small>
              </div>
            </div>
              <p className='text-center w-full text-lg mt-8 mb-4'>Organization accounts become ECO Partners</p>
              <a href="#" className='block mb-20 w-full text-base text-center text-ecoGreen underline'>Learn more about ECO Partners</a>
        </article>
        <div className="hidden w-2/5 ml-auto lg:block">
            <img src={bannerImg} alt="a hightlight of ECO's homepage" className='w-full h-auto inline-block object-contain' />
        </div>
      
    </section>
  )
}
