import React from 'react'

function Button(props) {
    const color = props.color ? props.color : 'primary'
    const text = props.text ? props.text : 'button'

    const loadingText = props.loadingText && props.loadingText !== ''
        ? props.loadingText
        : 'Success'

    const errorText = props.errorText && props.errorText !== '' 
        ? props.errorText : 'Error'
    return (
        <div>
            <button
                type="button" 
                className={`inline-block rounded-full bg-chikwawa-50 py-[7px] px-[20px]
                focus:bg-gray hover:bg-${props.color}-100 active:bg-gray text-2xl`}
            >
                {props.text}

            </button>
        </div>
    )
}

export default Button