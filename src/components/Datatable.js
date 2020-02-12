import React from 'react';
import { MDBDataTable } from 'mdbreact';
const Datatable = (props) => {
	return (
		<div>
			<MDBDataTable striped bordered hover searching={false} data={props.data} />
		</div>
	);
};
export default Datatable;
