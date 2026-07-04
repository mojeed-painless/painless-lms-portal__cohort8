import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function StringConcatenation() {

    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>String Concatenation</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    
                        <VideoBox 
                            title='String Concatenation'
                            code='GgYdGlB5j-Y'
                        />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-maths-operators" 
                nextPath="/js-unary-conversion"
            />
        </section>
    );
}
