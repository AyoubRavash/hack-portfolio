import type {Props} from './PageTitle.d'
import {useTranslation} from "react-i18next";

function PageTitle({title, description}: Props) {
    const {t} = useTranslation();

    return <div className={'flex flex-col gap-4'}>
        <h1 className={'text-2xl'}>
            <span className={'text-primary'}>/</span>
            {t(title)}
        </h1>
        <p className={'text-gray text-sm'}>{t(description)}</p>
    </div>
}

export default PageTitle;
