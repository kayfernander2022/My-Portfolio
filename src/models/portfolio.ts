import Job from './job'
import Tool from './tool'
import Section from './section'
import Social from './social'

export default interface Portfolio {
    meta: {
        title: string
        description: string
        showRepoLink: boolean
    }
    menu: {
        home: string
        about: string
        contact: string
    }
    intro: {
        headline: string
        typed: string[]
    }
    resume: {
        headline: string
        summary: string[]
        resumeLink: { label: string; url: string }
        jobsHeadline: string
        jobs: Job[]
        toolsHeadline: string
        tools: Tool[]
    }
    sections: Section[]
    contact: {
        icon:string, 
        label: string, 
        link: string
    }[]
    footer: {
        social: Social[]
        footerMessage: string
        background: string
    }
}
