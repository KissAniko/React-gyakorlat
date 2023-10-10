import React, {useState} from 'react'
import './ProgressBar.css'


const ProgressBar = () => {	

    const[percentage, setPercentage] = useState(50)

    const updateProgress = (value)=>{
        if(value < 0 || value > 100)
            return
        setPercentage(value)
    }

	return (
		<div>
			<div className='progressBar'>
				<div style = {{ width:percentage + "%"}}>
					<span>{percentage}%</span>
				</div>
			</div>
			<input type="number"
             value ={percentage}
             onChange = {() => { updateProgress(event.target.value) }}
             />
		</div>
	)
}

export default ProgressBar