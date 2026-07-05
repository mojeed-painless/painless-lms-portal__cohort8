import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function LocalGlobalVariables() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Local & Global Variables</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Local & Global Variables'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-function-declaration" 
                nextPath="/js-function-parameters"
            />
        </section>
    );
}