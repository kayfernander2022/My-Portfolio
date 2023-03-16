import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { RootState } from '../../store/myTypes'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Typed from '../typed/index';
import { smoothScroll } from '../../utilities'
import './stars.scss'
import './style.scss'

interface IntroProps {
    headline?: string
    typed?: string[]
}

/* <Typed
strings={props.typed}
typeSpeed={80}
backDelay={1100}
backSpeed={30}
loop
/> */

export const Intro: React.FC<IntroProps> = props => (
    <div id="home" className="intro background">
        <div style={{objectFit: 'cover', position:'absolute', top:'0', left:'0', height:'100%'}}>
            <div style={{position:'relative', overflow:'hidden', textAlign:'center', display:'flex',
        alignItems:'center', justifyContent:'center', height:'100%'}}>
                <video playsInline={true} autoPlay={true} muted loop style={{width:'100%'}}>
                        <source src="https://ik.imagekit.io/jfpi8d5c5/portfolio/Media2.mp4?updatedAt=1679000245129" type="video/mp4" />
                            Your browser does not support the video tag.
                </video>
            </div>
        </div>
        <div className="intro-content display-table">
            <div className="table-cell">
                <Container>
                    <h1 className="intro-title mb-4">{props.headline}</h1>
                    <p className="intro-subtitle">
                        <span className="text-slider-items"></span>
                        <strong className="text-slider">
                        <Typed
                            strings={props.typed}
                            typeSpeed={80}
                            backDelay={1100}
                            backSpeed={30}
                            loop
                            />
                        </strong>
                    </p>
                    <p className="pt-3">
                        <a
                            className="btn btn-primary btn-lg js-scroll px-4"
                            href="#about"
                            role="button"
                            onClick={(e: any) => smoothScroll(e, 'about')}
                        >
                            <FontAwesomeIcon icon={faChevronDown} />
                        </a>
                    </p>
                </Container>
            </div>
        </div>
    </div>
)

const mapStateToProps = (state: RootState) => {
    return state.portfolio.intro
}

export default compose(connect(mapStateToProps))(Intro)
