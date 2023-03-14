import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { RootState } from '../../store/myTypes'
import { Navbar } from 'react-bootstrap'
import { NavbarProps } from 'react-bootstrap'
import NavMenu from './navMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Portfolio from '../../models/portfolio'
import $ from 'jquery'
import './style.scss'
import {ScrollSpy} from 'bootstrap';

export const TopNav: React.FC<Portfolio> = props => {
    const [variant, setVariant] = useState<NavbarProps['variant']>('dark')

    useEffect(() => {
        const navbar = document.querySelector('.navbar') as HTMLElement
        const body: any = $('body')

        if (!navbar) return

        // Change nav style for load and top.
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > navbar.offsetHeight) {
                setVariant('light')
            } else {
                setVariant('dark')
            }
        })

        // Auto-advance menu.
         const temp = new ScrollSpy(body, {
            target: '.navbar.fixed-top',
            offset: navbar.offsetHeight + 50,
         });
    })

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            fixed="top"
            role="navigation"
            variant={variant}
        >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {!!props.meta.showRepoLink && (
                <Navbar.Brand
                    href="https://github.com/kayfernander2022"
                    target="_blank"
                    className="ml-3 mt-2"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </Navbar.Brand>
            )}
            <NavMenu {...props} />
        </Navbar>
    )
}

const mapStateToProps = (state: RootState) => {
    return state.portfolio
}

export default compose(connect<unknown, unknown, any, any>(mapStateToProps))(TopNav)
