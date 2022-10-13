import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();
  return (
    <div className="d-flex vh-100 bg-warning justify-content-center align-items-center">
      <div className="d-flex flex-column align-items-center">
        <Button
          variant="success m-3"
          onClick={() => navigate("/hiragana")}
          size="lg"
        >
          hiragana
        </Button>
      </div>
    </div>
  );
}
