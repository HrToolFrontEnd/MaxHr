import PageTop from "../../common/components/topPageTitle/Index";
import { InputBox } from "../../common/ManagerComponents/form/Form";
import { BsArrowLeft } from "react-icons/bs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { FullBtn, OutlineBtn } from "../../common/ManagerComponents/Btn/Btn";
export const Benchmark = () => {
  return (
    <>
      <div className="custom_container">
        <div>
          <PageTop
            TitleLink={-1}
            TilelIcon={<BsArrowLeft />}
            Name="Benchmark"
          />
        </div>
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12">
            <CreateBenchmark />
          </div>
          <div className="col-12">
            <SavedBenchmark />
          </div>
        </div>
      </div>
    </>
  );
};
const CreateBenchmark = () => {
  const EditorCustomToolbarOption = () => (
    <Editor
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      toolbarClassName="toolbar-class"
      placeholder="Congratulations, You are qualified for your next round of interview. We are inviting you..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker Congratulations, You are qualified for your next round of interview. We are inviting you..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker "
    />
  );
  return (
    <>
      <div className="custom_container_iner">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12">
            <div className="Benchmark_title_div">
              <h3>Create Benchmark</h3>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <InputBox type="text" label="Title" placeholder="Awesome" />
          </div>
          <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <label className="all_page_my_label_new">
              Add Scope of this project
            </label>
            <div className="Hire_editer">
              <EditorCustomToolbarOption />
            </div>
          </div>
          <div className="col-12">
            <div className="CreateBenchmark_brn">
              <FullBtn name="save" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const SavedBenchmark = () => {
  const EditorCustomToolbarOption = () => (
    <Editor
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      toolbarClassName="toolbar-class"
      placeholder="Congratulations, You are qualified for your next round of interview. We are inviting you..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker Congratulations, You are qualified for your next round of interview. We are inviting you..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker "
    />
  );
  return (
    <>
      <div className="custom_container_iner">
        <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
          <div className="col-12">
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="col-12">
                <div className="Benchmark_title_div">
                  <h3>Saved Benchmark</h3>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <InputBox type="text" label="Title" placeholder="Awesome" />
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <label className="all_page_my_label_new">
                  Objective of this Benchmark
                </label>
                <div className="Hire_editer">
                  <EditorCustomToolbarOption />
                </div>
              </div>
              <div className="col-12">
                <div className="SavedBenchmark_btn">
                  <OutlineBtn name="Delete" />
                  <FullBtn name="Edit" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row g-xxl-4 g-xl-4 g-lg-4 g-md-4 g-sm-3 g-3">
              <div className="col-12">
                <div className="Benchmark_title_div">
                  <h3>Saved Benchmark</h3>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <InputBox type="text" label="Title" placeholder="Awesome" />
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <label className="all_page_my_label_new">
                  Objective of this Benchmark
                </label>
                <div className="Hire_editer">
                  <EditorCustomToolbarOption />
                </div>
              </div>
              <div className="col-12">
                <div className="SavedBenchmark_btn">
                  <OutlineBtn name="Delete" />
                  <FullBtn name="Edit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
