import React, {FC, useRef, useEffect, useState} from 'react'
import cn from 'classnames'

import AuthorStyles from '../AuthorCard/AuthorCard.module.css';

type Props = {
    children: JSX.Element | JSX.Element[],
}

const LinkList: FC<Props> = ({ children }) => {

    const ref = useRef<HTMLUListElement>(null)
    const { author_links } = AuthorStyles;
    const [isChild, setIsChild] = useState<boolean>(false)

    useEffect(() => {
        if (ref.current?.closest(`.${AuthorStyles.author_content}`)) {
            setIsChild(true)
        }
    }, [])

    return (
        <ul style={{"listStyle": "none"}} ref={ref} className={cn({
            [author_links]: isChild
        }, 'mt-1')}>
            {children}
        </ul>
    )
}

export default LinkList