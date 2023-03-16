import React from 'react'
import TitleBox from '../titleBox'

export interface IntroProps {
    headline?: string
    summary?: string[]
    resumeLink: {label: string, url: string}
}

export const Intro: React.FC<IntroProps> = props => (
    <div className="pb-2 mb-5 pt-md-0">
        <TitleBox
                headline={props.headline}
                box="title-box-2"
                titleType="title-left"
            />
        {props.summary &&
            props.summary.map((content: string, i: number) => {
                return (
                    <p className="lead" key={i}>
                        {content}
                    </p>
                )
            })}
          <a href={props.resumeLink.url} download>{props.resumeLink.label}</a>
    </div>
)

export default Intro
