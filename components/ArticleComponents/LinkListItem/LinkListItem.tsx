import React, {FC, useRef, useEffect, useState} from 'react'
import cn from 'classnames'

import AuthorStyles from '../AuthorCard/AuthorCard.module.css'

type Props = {
    children: JSX.Element | JSX.Element[]
}

const LinkListItem: FC<Props> = ({ children }) => {
    const ref = useRef<HTMLLIElement>(null)    
    const { author_media } = AuthorStyles;
    const [isChild, setIsChild] = useState<boolean>(false)

    useEffect(() => {
        if (ref.current?.closest(`.${AuthorStyles.author_content}`)) {
            setIsChild(true)
        }
    }, [])
    
    return (
        <li ref={ref} className={cn({
            [author_media]: isChild
        })}>
            {children}
        </li>
    )
}

export default LinkListItem