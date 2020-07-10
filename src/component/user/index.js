import React, { Component, Fragment } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
	margin: 0 auto;
	width: 30%;
`;

class UserForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			valueFirst: "",
			valueSecond: "",
			editInput: "",
		};
	}

	addUser = (e) => {
		e.preventDefault();
		const user = {
			f_name: this.state.valueFirst,
			s_name: this.state.valueSecond,
		};
		this.setState(({ users }) => {
			return {
				users: [...users, user],
				valueFirst: "",
				valueSecond: "",
				editInput: "",
			};
		});
	};

	deleteUser = (i) => () => {
		const { users } = this.state;
		const newUsers = [...users.slice(0, i), ...users.slice(i + 1)];

		this.setState(() => {
			return { users: newUsers };
		});
	};

	editUser = (i) => () => {
		this.setState({ editInput: i });
	};

	inputValueFirst = ({ target: { value } }) => {
		this.setState(() => {
			return {
				valueFirst: value,
			};
		});
	};

	inputValueSecond = ({ target: { value } }) => {
		this.setState(() => {
			return {
				valueSecond: value,
			};
		});
	};

	render() {
		let { users, valueFirst, valueSecond } = this.state;
		return (
			<Fragment>
				{users.map((user, i) => {
					return (
						<StyledForm as="div" key={i}>
							{user.f_name}
							{user.s_name}

							{this.state.editInput === i ? <input /> : null}
							{this.state.editInput === i ? <input /> : null}

							<button onClick={this.editUser(i)}>Edit</button>
							<button onClick={this.deleteUser(i)}>delete</button>
						</StyledForm>
					);
				})}

				<hr />

				<StyledForm>
					<input
						onChange={this.inputValueFirst}
						value={valueFirst}
						placeholder="first-name"
					/>
					<br />
					<input
						onChange={this.inputValueSecond}
						value={valueSecond}
						placeholder="last-name"
					/>
					<br />
					<button onClick={this.addUser}>add</button>
				</StyledForm>
			</Fragment>
		);
	}
}

export default UserForm;
