import React from 'react'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <div className='news-letter-left'>
        <h4>Sign Up for Newsletter</h4>
        <p>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor <br />
             incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className='news-letter-right'>
        <div className='search'>
            <div className='input-field'>
                <input type="text" placeholder='Enter your email here'/>
            </div>

            <div className='subs-btn'>
                <button>Subscribe</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
