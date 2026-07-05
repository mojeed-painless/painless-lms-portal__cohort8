import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function NamingFunctions() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Naming Functions</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Naming Functions'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-return-function" 
                nextPath="/js-function-expression"
            />
        </section>
    );
}