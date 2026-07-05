import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function Objects() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Objects</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Objects'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-arrow-function" 
                nextPath="/js-dot-notation"
            />
        </section>
    );
}