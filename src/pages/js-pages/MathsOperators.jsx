import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function MathsOperators() {

    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Maths Operators</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    
                        <VideoBox 
                            title='Maths Operators'
                            code='F8pzk1ujjEk'
                        />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-basic-operators" 
                nextPath="/js-string-concatenation"
            />
        </section>
    );
}
