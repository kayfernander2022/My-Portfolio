export default interface Project {
    id: string
    image: string
    title: string
    techStack: string
    summary: string
    links?: { label: string; url: string }[]
    slides?: []
}
