import React from 'react';
import '../pagesitem/SignUpItems.css';

const SingUpItem = () => {
	return (
		<>
			<div className="container">
				<div className="modal">
					<h6 className="h6">Message</h6>
					<form className="form">
						<div className="input-group">
							<input type="text" placeholder="Full Name" />
							
							<input type="email" placeholder="Email" />
							
							<input type="tel" placeholder="(+99400)-000-00-00"  pattern="[(0-9]{6)}-[0-9]{3}-[0-9]{2}-[0-9]{2}"/>
							
							<textarea placeholder="Mesaj" rows="5" cols="30" style={{ resize: "none" }}></textarea>
							<button type="submit">Click Me</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default SingUpItem
