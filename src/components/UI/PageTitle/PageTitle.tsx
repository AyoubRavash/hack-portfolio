import type {Props} from './PageTitle.d'

function PageTitle({title, description}: Props) {
    return <div className={'flex flex-col gap-4'}>
        <h1 className={'text-2xl'}>
            <span className={'text-primary'}>/</span>
            {title}
        </h1>
        <p className={'text-gray text-sm'}>{description}</p>
    </div>
}

export default PageTitle;