import styled from 'styled-components';

export const Container = styled.div`
	background: var(--secondaryColor);
    margin-top: 20px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const ChatProfile = styled.div`
	padding: 20px;
    display: flex;
    align-items: center;
	justify-content: space-between;
    transition: 0.5s;
    cursor: pointer;
	border-bottom: 1px solid var(--primaryColor);

	img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 3px solid var(--primaryAccentColor);
    }

	button {
		span {
			display: none;
		}

		@media (max-width: 430px) {

			span { 
				display: block; 
			}

			p { 
				display: none; 
			}

		}
	}
`

export const ChatMessagesContainer = styled.div`
	height: 100%;
	overflow-y: scroll;
	padding: 20px;
	display: flex;
	flex-direction: column;

	::-webkit-scrollbar {
		width: 5px;
	}

	::-webkit-scrollbar-thumb {
		background: var(--primaryColor);
	}
`

export const ChatFormContainer = styled.div`
	padding: 5px 20px;
	display: flex;
	border-top: 1px solid var(--primaryColor);

	input {
		width: 100%;
	}

	button {
		padding: 10px;
		transition: 0.3s;
		font-size: 25px;

		&:hover {
			opacity: 0.8;
			transform: scale(1.3);
		}
	}
`

export const ChatMsgContainer = styled.div`
	margin-top: 10px;

	div {	
		padding: 15px 20px;
		background: var(--primaryColor);
		width: fit-content;
		border-radius: 10px;
		max-width: 50%;
	}

	.isMine {
		background: var(--primaryAccentColor);
		float: right;
	}

	.isImg {
		padding: 0px;
		border: 2px solid transparent;
		cursor: pointer;
		width: 20%;
	}

	img {
		width: 100%;
		border-radius: 10px;
		object-fit: cover;
	}

	@media (max-width: 800px) {
		div {
			max-width: 100%;
		}
		
		.isImg {
			width: 50%;
		}
	}
`