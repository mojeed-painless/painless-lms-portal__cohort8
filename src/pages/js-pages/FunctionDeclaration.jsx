import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function FunctionDeclaration() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Function Declaration</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Function Declaration'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-continue-loop" 
                nextPath="/js-local-global-variables"
            />
        </section>
    );
}