import React, { FC } from 'react'
import cn from 'classnames'

import SvgStyles from './heart-icon.module.css';

type Props = {
    className?: string
}

const Heart: FC<Props> = ({ className }) => {
  return (
    <svg className={cn(SvgStyles.svg, SvgStyles.svg_heart)} width="193" height="177" viewBox="0 0 193 177" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M89.0814 160.925C88.5039 163.299 86.1171 178.238 82.5655 171.322C76.4026 159.321 72.4826 145.691 68.42 132.904C63.1214 116.227 58.7254 99.131 55.3996 81.948C53.1725 70.4409 51.6263 58.7788 51.0595 47.0664C50.6964 39.5617 49.5087 29.167 55.3996 23.2761C68.8764 9.7994 85.2535 25.4094 90.442 38.145C95.8159 51.3355 97.6976 60.3157 94.8104 74.1101C92.0974 84.2837 91.0586 82.8805 91.8665 72.7536C92.1333 56.2092 111.293 23.9664 131.512 28.1788C143.273 30.629 149.062 47.0664 143.247 63.5427C138.01 78.381 127.849 89.9366 120.019 103.247C112.411 116.181 99.8352 134.556 94.6804 148.547" stroke="var(--accent-color)" strokeWidth="6" strokeLinecap="round"/>
        <path d="M151.206 119.895C156.646 120.564 167.402 126.964 171 129" stroke="var(--accent-color)" strokeWidth="6" strokeLinecap="round"/>
        <path d="M169.977 80.4041C173.119 79.6696 182.001 82.9272 186.07 84.962" stroke="var(--accent-color)" strokeWidth="6" strokeLinecap="round"/>
        <path d="M39.375 107.147C34.1043 111.891 23.4916 112.376 16.9146 114.294" stroke="var(--accent-color)" strokeWidth="6" strokeLinecap="round"/>
        <path d="M22.3975 56.8146C20.3274 56.8146 18.3428 57.131 16.3286 57.2116C11.6708 57.3979 7.52885 54.7727 2.99982 54.7727" stroke="var(--accent-color)" strokeWidth="6" strokeLinecap="round"/>
        <path d="M38.3535 16.6629C36.4605 11.4571 26.1074 6.45744 22.0187 3.39087" stroke="var(--accent-color)" strokeWidth="6" strokeLinecap="round"/>
        <path d="M174.54 32.7369C180.645 29.3457 187.789 20.7035 189.451 19.7256" stroke="var(--accent-color)" strokeWidth="6" strokeLinecap="round"/>
        <path d="M125.707 152.786C128.634 154.719 133.854 158.864 136.488 161.169" stroke="var(--accent-color)" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  )
}

export default Heart