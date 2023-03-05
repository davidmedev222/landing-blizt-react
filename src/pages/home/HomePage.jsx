import { Article, Text, Icon } from '../../components/export'
import { Link } from 'react-router-dom' // COMPONENT
import { useContext } from 'react' // HOOKS
import { ThemeContext } from '../../context/theme/ThemeContext' // CONTEXT
import { useIntersection } from '../../hooks/intersection/useIntersection'

const HomePage = () => {
  const { theme } = useContext(ThemeContext)

  const [elementRef, isIntersecting] = useIntersection({
    threshold: 0.25
  }, true)
  const [elementRef2, isIntersecting2] = useIntersection({
    threshold: 1
  }, true)
  const [elementRef3, isIntersecting3] = useIntersection({
    threshold: 1
  }, true)
  const [elementRef4, isIntersecting4] = useIntersection({
    threshold: 1
  }, true)

  return (
    <main className='main-landing'>
      {/* CONTENT */}
      <section className='landing'>
        {/* COMPONENT */}
        <Article className='article-one'>
          <h1 ref={elementRef} data-fade={isIntersecting} className='article-one-title'>
            Look beyond limits
          </h1>
          <footer data-fade={isIntersecting} data-delay='1000' className='article-one-footer'>
            <button className='article-one-btn'>Get in touch</button>
            <button className='article-one-icon'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                <path d='M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z' />
              </svg>
            </button>
          </footer>
          <picture className='article-one-picture'>
            <img
              src='https://res.cloudinary.com/dos3i5jqy/image/upload/v1672275827/landing-blizt-react/person_lvbd4e.png'
              alt='person'
            />
          </picture>
        </Article>
        {/* COMPONENT */}
        <Article className='article-two'>
          <Text className='article-two-text-one'>t</Text>
          <Text className='article-two-text-two'>u</Text>
          <Text className='article-two-text-three'>a</Text>
          <Text className='article-two-text-four'>v</Text>
          <Text className='article-two-text-five'>i</Text>
          <Text className='article-two-text-six'>r</Text>
          {/* COMPONENTS */}
          <Icon className='article-two-icon-one'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
              <path d='M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zm64 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z' />
            </svg>
          </Icon>
          <Icon className='article-two-icon-two'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
              <path d='M257 8C120 8 9 119 9 256s111 248 248 248 248-111 248-248S394 8 257 8zm-49.5 374.8L81.8 257.1l125.7-125.7 35.2 35.4-24.2 24.2-11.1-11.1-77.2 77.2 77.2 77.2 26.6-26.6-53.1-52.9 24.4-24.4 77.2 77.2-75 75.2zm99-2.2l-35.2-35.2 24.1-24.4 11.1 11.1 77.2-77.2-77.2-77.2-26.5 26.5 53.1 52.9-24.4 24.4-77.2-77.2 75-75L432.2 255 306.5 380.6z' />
            </svg>
          </Icon>
          <Icon className='article-two-icon-three'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
              <path d='M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.7 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z' />
            </svg>
          </Icon>
        </Article>
        {/* COMPONENT */}
        <Article>
          <header ref={elementRef2} data-fade={isIntersecting2} className='article-three-header'>
            <h3 className='article-three-text'>
              They are very proactive and work to make their product even better and have the best
              quality in the market.
            </h3>
            <button className='article-three-icon'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                <path d='M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z' />
              </svg>
            </button>
          </header>
          <button data-fade={isIntersecting2} className='article-three-logo'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
              <path d='M 4.75 19 C 5.4375 19 6.171875 19 6.855469 19 C 6.847656 23.183594 6.839844 27.371094 6.835938 31.554688 C 6.097656 31.632813 5.289063 31.734375 4.558594 31.816406 C 3.621094 29.195313 3.042969 27.566406 2.101563 24.804688 C 2.101563 27.609375 2.097656 29.335938 2.097656 32.140625 C 1.414063 32.226563 0.683594 32.320313 0 32.417969 C 0 27.945313 0 23.472656 0 19 C 0.769531 19 1.25 19 2.019531 19 C 2.929688 21.9375 3.835938 23.785156 4.738281 26.578125 C 4.742188 23.714844 4.746094 21.863281 4.75 19 Z M 14.730469 21.074219 C 14.730469 20.46875 14.71875 19.601563 14.71875 19 C 12.765625 19 10.839844 19 8.886719 19 C 8.878906 23.125 8.871094 27.253906 8.863281 31.378906 C 10.8125 31.203125 12.765625 31.058594 14.71875 30.945313 C 14.722656 30.339844 14.722656 29.472656 14.722656 28.871094 C 13.453125 28.949219 12.238281 29.027344 10.96875 29.113281 C 10.972656 28.007813 10.972656 27.089844 10.976563 25.980469 C 11.902344 25.964844 12.878906 25.976563 13.824219 25.960938 C 13.824219 25.355469 13.828125 24.484375 13.828125 23.878906 C 12.890625 23.894531 11.902344 23.898438 10.980469 23.914063 C 10.980469 22.804688 10.984375 22.195313 10.988281 21.085938 C 11.566406 21.078125 14.246094 21.078125 14.730469 21.074219 Z M 16.082031 21.070313 C 16.175781 21.070313 18.199219 21.082031 18.269531 21.082031 C 18.265625 24.410156 18.261719 27.445313 18.257813 30.773438 C 18.945313 30.746094 19.679688 30.726563 20.367188 30.710938 C 20.367188 27.402344 20.371094 24.382813 20.375 21.074219 C 21.101563 21.070313 21.851563 21.066406 22.574219 21.066406 C 22.574219 20.476563 22.578125 19.601563 22.578125 19.011719 C 20.4375 19.011719 18.222656 19.011719 16.085938 19.011719 C 16.085938 19.609375 16.082031 20.472656 16.082031 21.070313 Z M 29.800781 19 C 27.847656 19 25.894531 19 23.945313 19 C 23.941406 22.882813 23.941406 26.769531 23.941406 30.652344 C 24.167969 30.652344 24.398438 30.652344 24.628906 30.652344 C 25.09375 30.652344 25.566406 30.652344 26.027344 30.65625 C 26.027344 29.007813 26.027344 27.503906 26.027344 25.855469 C 26.140625 25.855469 28.601563 25.851563 28.878906 25.855469 C 28.878906 25.265625 28.878906 24.386719 28.875 23.796875 C 28.613281 23.792969 26.132813 23.796875 26.027344 23.796875 C 26.027344 22.734375 26.023438 22.136719 26.023438 21.078125 C 26.253906 21.078125 29.230469 21.078125 29.800781 21.082031 C 29.800781 20.488281 29.800781 19.59375 29.800781 19 Z M 33.261719 28.773438 C 33.257813 25.414063 33.277344 22.367188 33.269531 19.007813 C 32.585938 19.007813 31.851563 19.007813 31.164063 19.007813 C 31.171875 22.929688 31.152344 26.851563 31.15625 30.773438 C 33.027344 30.84375 34.996094 30.917969 36.867188 31.050781 C 36.863281 30.445313 36.863281 29.578125 36.863281 28.976563 C 35.679688 28.90625 34.445313 28.820313 33.261719 28.773438 Z M 38.617188 31.175781 C 39.304688 31.230469 40.011719 31.285156 40.699219 31.347656 C 40.699219 27.238281 40.707031 23.121094 40.699219 19.011719 C 40.011719 19.011719 39.277344 19.011719 38.59375 19.011719 C 38.601563 23.066406 38.609375 27.121094 38.617188 31.175781 Z M 47.246094 25.328125 C 48.136719 23.222656 49.042969 21.214844 49.96875 19.011719 C 49.210938 19.011719 48.429688 19.011719 47.667969 19.011719 C 47.097656 20.371094 46.707031 21.246094 46.160156 22.542969 C 45.652344 21.195313 45.3125 20.320313 44.800781 19.011719 C 44.042969 19.011719 43.261719 19.011719 42.503906 19.011719 C 43.34375 21.0625 44.113281 23.117188 44.96875 25.296875 C 44.082031 27.386719 43.175781 29.464844 42.289063 31.472656 C 43.023438 31.542969 43.785156 31.648438 44.519531 31.730469 C 45.046875 30.441406 45.523438 29.445313 46.054688 28.117188 C 46.578125 29.53125 47.058594 30.625 47.585938 32.082031 C 48.316406 32.179688 49.269531 32.316406 50 32.417969 C 49.113281 30.046875 48.140625 27.574219 47.246094 25.328125 Z' />
            </svg>
          </button>
        </Article>
        {/* COMPONENT */}
        <Article>
          <header ref={elementRef3} data-fade={isIntersecting3} className='article-four-header'>
            <h3 className='article-four-text'>
              The most professional, experienced and specialized team in the industry.
            </h3>
            <Link className='article-four-a' to='/'>
              Work with us
            </Link>
          </header>
          <footer data-fade={isIntersecting3} className='article-four-footer'>
            <div className='article-four-users'>
              <img
                className='article-four-img'
                src='https://res.cloudinary.com/dos3i5jqy/image/upload/v1672263609/landing-blizt-react/user-1_knqoqu.webp'
                alt='user 1'
              />
              <img
                className='article-four-img'
                src='https://res.cloudinary.com/dos3i5jqy/image/upload/v1672263615/landing-blizt-react/user-2_bfb0ch.webp'
                alt='user 2'
              />
              <img
                className='article-four-img'
                src='https://res.cloudinary.com/dos3i5jqy/image/upload/v1672263609/landing-blizt-react/user-1_knqoqu.webp'
                alt='user 3'
              />
            </div>
            <span className='article-four-span'>MEET OUR DEVELOPERS</span>
          </footer>
        </Article>
        {/* COMPONENT */}
        <Article className='article-five'>
          <h3 ref={elementRef4} data-fade={isIntersecting4} className='article-five-text'>
            3D
          </h3>
          <img
            className={`article-five-img ${theme === 'dark' ? 'article-five-img-dark' : ''}`}
            src='https://res.cloudinary.com/dos3i5jqy/image/upload/v1672428160/landing-blizt-react/fondo-one_mt8g7a.png'
            alt='fondo con puntos'
          />
          {/* COMPONENT */}
          <Icon>
            <svg className='article-five-svg' data-fade={isIntersecting4} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
              <path d='M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.7 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z' />
            </svg>
          </Icon>
        </Article>
      </section>
    </main>
  )
}

export { HomePage }
