import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Seperator } from '../apis/model';


interface Props {
  seperator: Seperator
  missing?: 'top' | 'bottom'
}

const SeperatorItem: React.FC<Props> = ({ seperator, missing }) => {

  const [wordWidth, setWordWidth] = useState(0)
  const [nrOfWords, setNrOfWords] = useState(30)
  const ref = useRef<HTMLDivElement>(null)

  const getWindowDimensions = () => window.innerWidth
  const [windowWidth, setWindowWidth] = useState(getWindowDimensions())

  useEffect(() => {
    const handleResize = () => setWindowWidth(getWindowDimensions())
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useLayoutEffect(() => {
    if (ref && ref.current) {
      setWordWidth(ref.current.clientWidth)
    }
  }, [ref])

  useEffect(() => {
    if (wordWidth > 0) {
      setNrOfWords(Math.ceil(windowWidth / wordWidth))
    }
  }, [wordWidth, windowWidth])

  return (
    <div className='seperator-container max-width-1200 disabled-highlight'>
      <div className='seperator-bar' style={{
        marginBottom: missing === 'bottom' ? 0 : undefined,
        marginTop: missing === 'top' ? '5px' : undefined,
        width: wordWidth * nrOfWords,
        animationDuration: `${nrOfWords * 3}s`,
        animationPlayState: 'running',
      }}>
       {/*  {
          Array.from(Array(nrOfWords * 2).keys()).map((_, index) => {
            return (
              <div ref={ref} key={index}>
                <i className='seperator-txt'>{seperator.title}</i>
              </div>
            )
          })
        } */}
      </div >
    </div>
  )
}
export default SeperatorItem