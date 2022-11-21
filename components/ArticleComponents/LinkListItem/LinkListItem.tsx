import React, {FC, Children, cloneElement, useRef, useEffect} from 'react'

import AuthorStyles from '../AuthorCard/AuthorCard.module.css'

type Props = {
    children: JSX.Element | JSX.Element[]
}

const LinkListItem: FC<Props> = ({ children }) => {
    const ref = useRef<HTMLLIElement>(null)    
    
    return (
        <li ref={ref}>
            {children}
        </li>
    )
}

export default LinkListItem