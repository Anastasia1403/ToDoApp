
export const selectCustomStyles = {
    option: (provided, state) => ({
        ...provided,
        padding: '4px 8px',
        color: state.data.color ?? state.label,
        borderRadius: 4,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: state.data.color ?? state.label,
            color: '#ffffff',
        },
        '&:focus-within': {
            backgroundColor: state.data.color ?? state.label,
            color: '#ffffff',
        },
    }),
    menu: (provided) => ({
        ...provided,
        padding:  '2px 4px',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        
        }),

    container: (provided) => ({
        ...provided,
        width: '100%',
    }),
    control: (provided) => ({
        ...provided,
        border: '2px solid #67547b',
        outline: 'none',
        '&:hover': {
            border: '2px solid #67547b',
        },
        '&:focus': {
            outline: 'none',
        }
    }),
    singleValue: (provided, state) => ({
        ...provided,
        position: 'relative',
        padding: '0 0 0 25px',
        '&::before': {
            content: '""',
            position: 'absolute',
            width: '18px',
            height: '18px',
            top: '2px',
            left: '0',
            borderRadius: '50%',
            backgroundColor: state.selectProps.value.label,
        },
    }),
    multiValue: (provided, state) => ({
        ...provided,
        borderRadius: '6px',
        backgroundColor: state.data.color,
        '& div': {
            color: '#ffffff'
        },
    }),
    multiValueRemove: (provided, state) => ({
        ...provided,
        cursor: 'pointer',
        '& svg': {
            transition: '0.3s',
        },
        
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#ffffff',
        },
        
        '&:hover svg': {
            transform: 'scale(1.5)'
        },
    }),
    }
