import Button from "react-bootstrap/Button";

const ButtonComponent = (props) => {
    return (
        <>
            <Button onClick={props.onClick} className="mx-1" variant={props.theme}>
                {props.Btncontent}
            </Button>
        </>
    );
};

export default ButtonComponent;
