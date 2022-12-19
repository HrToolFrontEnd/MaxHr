import { useNavigate } from "react-router-dom";
import { Dropdown, ButtonToolbar } from "rsuite";
import { BiDotsHorizontal } from "react-icons/bi";
import { BsReplyAll } from "react-icons/bs";
import { CgPoll } from "react-icons/cg";
import { AiOutlineEdit, AiOutlineShareAlt } from "react-icons/ai";
import { BiBookmark, BiMessageAltError, BiTask } from "react-icons/bi";
import { MdContentCopy } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
export const LongMenuLeft = () => {
  const navigate = useNavigate();
  return (
    <div className="chat_div_dropdown">
      <ButtonToolbar>
        <Dropdown title={<BiDotsHorizontal />} activeKey="e-2">
          <Dropdown.Item
            className="chat_div_dropdown_inner"
            onClick={() => navigate("/")}
            eventKey="a"
          >
            reply
            <span>
              <BsReplyAll />
            </span>
          </Dropdown.Item>
          <Dropdown.Item className="chat_div_dropdown_inner" eventKey="b">
            Edit
            <span>
              <AiOutlineEdit />
            </span>
          </Dropdown.Item>
          <Dropdown.Item className="chat_div_dropdown_inner" eventKey="c">
            Bookmark
            <span>
              <BiBookmark />
            </span>
          </Dropdown.Item>
          <Dropdown.Item className="chat_div_dropdown_inner" eventKey="d">
            Copy
            <span>
              <MdContentCopy />
            </span>
          </Dropdown.Item>
          <Dropdown.Item className="chat_div_dropdown_inner" eventKey="f">
            Forward
            <span>
              <AiOutlineShareAlt />
            </span>
          </Dropdown.Item>
          <Dropdown.Item className="chat_div_dropdown_inner" eventKey="g">
            Mark as Read
            <span>
              <BiMessageAltError />
            </span>
          </Dropdown.Item>
          <Dropdown.Item className="chat_div_dropdown_inner" eventKey="g">
            Delete
            <span>
              <RiDeleteBinLine />
            </span>
          </Dropdown.Item>
          <Dropdown.Menu className="chat_div_dropdown_inner" title="More">
            <Dropdown.Item className="chat_div_dropdown_inner" eventKey="e-1">
              <span>
                <CgPoll />
              </span>
              Create Poll
            </Dropdown.Item>
            <Dropdown.Item className="chat_div_dropdown_inner" eventKey="e">
              <span>
                <BiTask />
              </span>
              Create Task
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonToolbar>
    </div>
  );
};
export const LongMenuRight = () => {
  const navigate = useNavigate();
  return (
    <div className="chat_div_dropdown chat_div_dropdown_right">
      <ButtonToolbar>
        <Dropdown title={<BiDotsHorizontal />} activeKey="e-2">
          <Dropdown.Item
            className="chat_div_dropdown_inner"
            onClick={() => navigate("/")}
            eventKey="a"
          >
            reply
            <span>
              <BsReplyAll />
            </span>
          </Dropdown.Item>
          <Dropdown.Item className="chat_div_dropdown_inner" eventKey="b">
            Edit
            <span>
              <AiOutlineEdit />
            </span>
          </Dropdown.Item>
          <Dropdown.Item className="chat_div_dropdown_inner" eventKey="c">
            Bookmark
            <span>
              <BiBookmark />
            </span>
          </Dropdown.Item>
          <Dropdown.Item className="chat_div_dropdown_inner" eventKey="d">
            Copy
            <span>
              <MdContentCopy />
            </span>
          </Dropdown.Item>
          <Dropdown.Item className="chat_div_dropdown_inner" eventKey="f">
            Forward
            <span>
              <AiOutlineShareAlt />
            </span>
          </Dropdown.Item>
          <Dropdown.Item className="chat_div_dropdown_inner" eventKey="g">
            Mark as Read
            <span>
              <BiMessageAltError />
            </span>
          </Dropdown.Item>
          <Dropdown.Item className="chat_div_dropdown_inner" eventKey="g">
            Delete
            <span>
              <RiDeleteBinLine />
            </span>
          </Dropdown.Item>
          <Dropdown.Menu className="chat_div_dropdown_inner" title="More">
            <Dropdown.Item className="chat_div_dropdown_inner" eventKey="e-1">
              <span>
                <CgPoll />
              </span>
              Create Poll
            </Dropdown.Item>
            <Dropdown.Item className="chat_div_dropdown_inner" eventKey="e">
              <span>
                <BiTask />
              </span>
              Create Task
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonToolbar>
    </div>
  );
};
