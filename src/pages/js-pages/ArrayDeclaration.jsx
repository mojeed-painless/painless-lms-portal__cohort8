import ExampleCode from '../../components/common/ExampleCode';
import '../../assets/styles/course-content.css';
import PrevNextBtn from '../../components/common/PrevNextBtn';
import VideoBox from '../../components/common/VideoBox';

export default function ArrayDeclaration() {
    return (
        <section className="course-content">
            <div className="course-content__header">
                <h1>Array Declaration</h1>
                <p>Javascript</p>
            </div>

            <section>
                <div className="course-content__container">
                    <VideoBox 
                        title='Array Declaration'
                        code=''
                    />
                </div>
            </section>

            <PrevNextBtn 
                prevPath="/js-object-methods" 
                nextPath="/js-array-indexing"
            />
        </section>
    );
}