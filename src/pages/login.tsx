/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Example() {
  return (
    <>
      <div
        className="flex min-h-screen flex-col items-center justify-center space-y-8 py-12 sm:px-6 lg:space-y-12 lg:px-8">
        <div aria-label="Sign in form" className="w-full space-y-4 sm:mx-auto sm:max-w-md">
          <div className="border-y border-gray-700 bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:border-x sm:px-10">
            <div className="flex animate-fade-in flex-col justify-center text-center"><span
              className="text-sm font-medium text-gray-300">Sign in with</span>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  className="inline-flex items-center border font-medium relative text-lg px-6 py-3 rounded-md text-white border-gray-700 bg-gray-800 hover:bg-gray-750 hover:text-gray-100 shadow-sm justify-center"
                  type="button"><span className=""><span className="sr-only">Sign in with</span><svg aria-hidden="true"
                                                                                                     focusable="false"
                                                                                                     data-prefix="fab"
                                                                                                     data-icon="twitch"
                                                                                                     className="svg-inline--fa fa-twitch mr-2"
                                                                                                     role="img"
                                                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                                                     viewBox="0 0 512 512"><path
                  fill="currentColor"
                  d="M391.2 103.5H352.5v109.7h38.63zM285 103H246.4V212.8H285zM120.8 0 24.31 91.42V420.6H140.1V512l96.53-91.42h77.25L487.7 256V0zM449.1 237.8l-77.22 73.12H294.6l-67.6 64v-64H140.1V36.58H449.1z"></path></svg><span>Twitch</span></span>
                </button>
                <button
                  className="inline-flex items-center border font-medium relative text-lg px-6 py-3 rounded-md text-white border-gray-700 bg-gray-800 hover:bg-gray-750 hover:text-gray-100 shadow-sm justify-center"
                  type="button"><span className=""><span className="sr-only">Sign in with</span><svg aria-hidden="true"
                                                                                                     focusable="false"
                                                                                                     data-prefix="fab"
                                                                                                     data-icon="discord"
                                                                                                     className="svg-inline--fa fa-discord mr-2"
                                                                                                     role="img"
                                                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                                                     viewBox="0 0 640 512"><path
                  fill="currentColor"
                  d="M524.5 69.84a1.5 1.5 0 0 0 -.764-.7A485.1 485.1 0 0 0 404.1 32.03a1.816 1.816 0 0 0 -1.923 .91 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.14-30.6 1.89 1.89 0 0 0 -1.924-.91A483.7 483.7 0 0 0 116.1 69.14a1.712 1.712 0 0 0 -.788 .676C39.07 183.7 18.19 294.7 28.43 404.4a2.016 2.016 0 0 0 .765 1.375A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.1 430.4a1.86 1.86 0 0 0 -1.019-2.588 321.2 321.2 0 0 1 -45.87-21.85 1.885 1.885 0 0 1 -.185-3.126c3.082-2.309 6.166-4.711 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.23 43.92 200.4 43.92 295.5 0a1.812 1.812 0 0 1 1.924 .233c2.944 2.426 6.027 4.851 9.132 7.16a1.884 1.884 0 0 1 -.162 3.126 301.4 301.4 0 0 1 -45.89 21.83 1.875 1.875 0 0 0 -1 2.611 391.1 391.1 0 0 0 30.01 48.81 1.864 1.864 0 0 0 2.063 .7A486 486 0 0 0 610.7 405.7a1.882 1.882 0 0 0 .765-1.352C623.7 277.6 590.9 167.5 524.5 69.84zM222.5 337.6c-28.97 0-52.84-26.59-52.84-59.24S193.1 219.1 222.5 219.1c29.67 0 53.31 26.82 52.84 59.24C275.3 310.1 251.9 337.6 222.5 337.6zm195.4 0c-28.97 0-52.84-26.59-52.84-59.24S388.4 219.1 417.9 219.1c29.67 0 53.31 26.82 52.84 59.24C470.7 310.1 447.5 337.6 417.9 337.6z"></path></svg><span>Discord</span></span>
                </button>
                <button
                  className="inline-flex items-center border font-medium relative text-lg px-6 py-3 rounded-md text-white border-gray-700 bg-gray-800 hover:bg-gray-750 hover:text-gray-100 shadow-sm justify-center"
                  type="button"><span className=""><span className="sr-only">Sign in with</span><svg aria-hidden="true"
                                                                                                     focusable="false"
                                                                                                     data-prefix="fab"
                                                                                                     data-icon="twitter"
                                                                                                     className="svg-inline--fa fa-twitter mr-2"
                                                                                                     role="img"
                                                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                                                     viewBox="0 0 512 512"><path
                  fill="currentColor"
                  d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg><span>Twitter</span></span>
                </button>
                <button
                  className="inline-flex items-center border font-medium relative text-lg px-6 py-3 rounded-md text-white border-gray-700 bg-gray-800 hover:bg-gray-750 hover:text-gray-100 shadow-sm justify-center"
                  type="button"><span className=""><span className="sr-only">Sign in with</span><svg aria-hidden="true"
                                                                                                     focusable="false"
                                                                                                     data-prefix="fab"
                                                                                                     data-icon="facebook"
                                                                                                     className="svg-inline--fa fa-facebook mr-2"
                                                                                                     role="img"
                                                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                                                     viewBox="0 0 512 512"><path
                  fill="currentColor"
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"></path></svg><span>Facebook</span></span>
                </button>
                <button
                  className="inline-flex items-center border font-medium relative text-lg px-6 py-3 rounded-md text-white border-gray-700 bg-gray-800 hover:bg-gray-750 hover:text-gray-100 shadow-sm justify-center"
                  type="button"><span className=""><span className="sr-only">Sign in with</span><svg aria-hidden="true"
                                                                                                     focusable="false"
                                                                                                     data-prefix="fab"
                                                                                                     data-icon="google"
                                                                                                     className="svg-inline--fa fa-google mr-2"
                                                                                                     role="img"
                                                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                                                     viewBox="0 0 488 512"><path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg><span>Google</span></span>
                </button>
                <button
                  className="inline-flex items-center border font-medium relative text-lg px-6 py-3 rounded-md text-white border-gray-700 bg-gray-800 hover:bg-gray-750 hover:text-gray-100 shadow-sm justify-center"
                  type="button"><span className=""><span className="sr-only">Sign in with</span><svg aria-hidden="true"
                                                                                                     focusable="false"
                                                                                                     data-prefix="fab"
                                                                                                     data-icon="microsoft"
                                                                                                     className="svg-inline--fa fa-microsoft mr-2"
                                                                                                     role="img"
                                                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                                                     viewBox="0 0 448 512"><path
                  fill="currentColor"
                  d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"></path></svg><span>Microsoft</span></span>
                </button>
              </div>
              <p className="prose prose-sm mx-auto mt-6 max-w-[18rem] text-xs text-gray-500">By signing in, you agree to
                our <a href="/info/terms-of-service">Terms of Service</a> and <a href="/info/privacy-policy">Privacy
                  Policy</a>.</p></div>
          </div>
        </div>
      </div>
    </>
  )
}