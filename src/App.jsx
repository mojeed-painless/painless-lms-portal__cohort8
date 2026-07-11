import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';
import CourseAccessRoute from './components/common/CourseAccessRoute';
import ErrorBoundary from './components/common/ErrorBoundary';
import './App.css'

// import DashboardScreen from './pages/DashboardScreen';

import MainLayout from './pages/MainLayout';
import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen'; 
import RegisterScreen from './pages/RegisterScreen';
import RoleBasedDashboard from './components/common/RoleBasedDashboard';
import NotFoundScreen from './pages/NotFoundScreen';
import NoAccess from './pages/NoAccess';

import CourseContentScreen from './pages/CourseContentScreen';
import AssignmentScreen from './pages/AssignmentScreen';
import Checkpoints from './pages/Checkpoints';
import QuizScreen from './pages/QuizScreen';
import LeaderboardScreen from './pages/LeaderboardScreen';
import TranscriptScreen from './pages/TranscriptScreen';
import SettingsScreen from './pages/SettingsScreen';

{/* Introduction pages */}
import WelcomeScreen from './pages/html-pages/WelcomeScreen';
import GeneralOverview from './pages/html-pages/GeneralOverview';
import WhyLearn from './pages/html-pages/WhyLearn';
import CourseOverview from './pages/html-pages/CourseOverview';
import CodeEditors from './pages/html-pages/CodeEditors';
import AssignmentGuide from './pages/html-pages/AssignmentGuide';

{/* HTML pages */}
import HTMLTransition from './pages/html-pages/HTMLTransition';
import HTMLPageStructure from './pages/html-pages/HTMLPageStructure';
import ListTags from './pages/html-pages/ListTags';
import TableTags from './pages/html-pages/TableTags';
import Images from './pages/html-pages/Images';
import Hyperlinks from './pages/html-pages/Hyperlinks';
import InlineBlockElement from './pages/html-pages/InlineBlockElement';
import Forms from './pages/html-pages/Forms';
import HTMLStyling from './pages/html-pages/HTMLStyling';

{/* CSS pages */}
import CSSTransition from './pages/css-pages/CSSTransition';
import Animation from './pages/css-pages/Animation';
import AttributesSelector from './pages/css-pages/AttributesSelector';
import Background from './pages/css-pages/Background';
import Borders from './pages/css-pages/Borders';
import BoxModel from './pages/css-pages/BoxModel';
import BoxShadow from './pages/css-pages/BoxShadow';
import Colors from './pages/css-pages/Colors';
import Combinators from './pages/css-pages/Combinators';
import CSSIntroduction from './pages/css-pages/CSSIntroduction';
import CSSSyntax from './pages/css-pages/CSSSyntax';
import DisplayLayout from './pages/css-pages/DisplayLayout';
import FlexboxLayout from './pages/css-pages/FlexboxLayout';
import GridLayout from './pages/css-pages/GridLayout';
import HeightWidth from './pages/css-pages/HeightWidth';
import Icons from './pages/css-pages/Icons';
import InsertingCSS from './pages/css-pages/InsertingCSS';
import Links from './pages/css-pages/Links';
import Lists from './pages/css-pages/Lists';
import MediaQuery from './pages/css-pages/MediaQuery';
import NavigationBar from './pages/css-pages/NavigationBar';
import Opacity from './pages/css-pages/Opacity';
import OverflowLayout from './pages/css-pages/OverflowLayout';
import PortfolioProject from './pages/css-pages/PortfolioProject';
import PositionLayout from './pages/css-pages/PositionLayout';
import PseudoClasses from './pages/css-pages/PseudoClasses';
import PseudoElements from './pages/css-pages/PseudoElements';
import Selectors from './pages/css-pages/Selectors';
import StylingForms from './pages/css-pages/StylingForms';
import Tables from './pages/css-pages/Tables';
import TextFormatting from './pages/css-pages/TextFormatting';
import Transform from './pages/css-pages/Transform';
import Transition from './pages/css-pages/Transition';

{/* JS pages */}
import JSTransition from './pages/js-pages/JSTransition';
import JavascriptIntro from './pages/js-pages/JavascriptIntro';
import LinkingJavascript from './pages/js-pages/LinkingJavascript';
import Alert from './pages/js-pages/Alert';
import Statements from './pages/js-pages/Statements';
import Variables from './pages/js-pages/Variables';
import NamingVariables from './pages/js-pages/NamingVariables';
import Constant from './pages/js-pages/Constant';
import DataTypes from './pages/js-pages/DataTypes';
import Strings from './pages/js-pages/Strings';
import Numbers from './pages/js-pages/Numbers';
import BigInt from './pages/js-pages/BigInt';
import Boolean from './pages/js-pages/Boolean';
import Null from './pages/js-pages/Null';
import TypeOf from './pages/js-pages/TypeOf';
import BrowserUserInteraction from './pages/js-pages/BrowserUserInteraction';
import StringConversion from './pages/js-pages/StringConversion';
import NumberConversion from './pages/js-pages/NumberConversion';
import BooleanConversion from './pages/js-pages/BooleanConversion';
import BasicOperators from './pages/js-pages/BasicOperators';
import MathsOperators from './pages/js-pages/MathsOperators';
import StringConcatenation from './pages/js-pages/StringConcatenation';
import UnaryConversion from './pages/js-pages/UnaryConversion';
import AssignmentOperator from './pages/js-pages/AssignmentOperator';
import IncrementDecrement from './pages/js-pages/IncrementDecrement';
import NumberComparison from './pages/js-pages/NumberComparison';
import StringComparison from './pages/js-pages/StringComparison';
import MixedComparison from './pages/js-pages/MixedComparison';

import OrOperator from './pages/js-pages/OrOperator';
import AndOperator from './pages/js-pages/AndOperator';
import NotOperator from './pages/js-pages/NotOperator';
import NullishOperator from './pages/js-pages/NullishOperator';
import IfStatement from './pages/js-pages/IfStatement';
import ElseifStatement from './pages/js-pages/ElseifStatement';
import SwitchStatement from './pages/js-pages/SwitchStatement';
import WhileLoop from './pages/js-pages/WhileLoop';
import ForLoop from './pages/js-pages/ForLoop';
import BreakingLoop from './pages/js-pages/BreakingLoop';
import ContinueLoop from './pages/js-pages/ContinueLoop';
import FunctionDeclaration from './pages/js-pages/FunctionDeclaration';
import LocalGlobalVariables from './pages/js-pages/LocalGlobalVariables';
import FunctionParameters from './pages/js-pages/FunctionParameters';
import ReturnFunction from './pages/js-pages/ReturnFunction';
import NamingFunctions from './pages/js-pages/NamingFunctions';
import FunctionExpression from './pages/js-pages/FunctionExpression';
import ArrowFunction from './pages/js-pages/ArrowFunction';
import Objects from './pages/js-pages/Objects';
import DotNotation from './pages/js-pages/DotNotation';
import SquareBracketNotation from './pages/js-pages/SquareBracketNotation';
import PropertyExistence from './pages/js-pages/PropertyExistence';
import ObjectLoops from './pages/js-pages/ObjectLoops';
import ObjectReferencing from './pages/js-pages/ObjectReferencing';
import CloningObject from './pages/js-pages/CloningObject';
import ObjectMethods from './pages/js-pages/ObjectMethods';
import ArrayDeclaration from './pages/js-pages/ArrayDeclaration';
import ArrayIndexing from './pages/js-pages/ArrayIndexing';
import ArrayLength from './pages/js-pages/ArrayLength';
import MultipleTypedArray from './pages/js-pages/MultipleTypedArray';
import ArrayLoops from './pages/js-pages/ArrayLoops';
import PopShiftMethods from './pages/js-pages/PopShiftMethods';
import SliceMethod from './pages/js-pages/SliceMethod';
import SpliceMethod from './pages/js-pages/SpliceMethod';

import LoadingAnimation from './components/common/LoadingAnimation';




function App() {

  return (
    <ErrorBoundary>
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          
          {/* <Route element={<MainLayout />}>
            <Route path='/role' element={<AssignmentScreen />} />
          </Route> */}
          
          <Route path="/" element={<PrivateRoute />}>

            <Route element={<MainLayout />}>
              <Route index element={<RoleBasedDashboard />} />
              <Route path="/content" element={<CourseContentScreen />} />
              <Route path="/assignments" element={<AssignmentScreen />} />
              <Route path="/checkpoints" element={<Checkpoints />} />
              <Route path="/quizzes" element={<QuizScreen />} />
              <Route path="/leaderboard" element={<LeaderboardScreen />} />
              <Route path="/transcript" element={<TranscriptScreen />} />
              <Route path="/settings" element={<SettingsScreen />} />

              
              {/* Introduction pages - Public to all authenticated users */}
              <Route path="/welcome" element={<WelcomeScreen />} />
              <Route path="/general-overview" element={<GeneralOverview />} />
              <Route path="/why" element={<WhyLearn />} />
              <Route path="/course-overview" element={<CourseOverview />} />
              <Route path="/editor" element={<CodeEditors />} />
              <Route path="/assignment-guide" element={<AssignmentGuide />} />

              
              {/* HTML and CSS Content - Requires htmlAccess and release schedule */}
              <Route element={<CourseAccessRoute courseType="html" />}>
                {/* HTML Content */}
                <Route path="/html-transition" element={<HTMLTransition />} />
                <Route path="/html-structure" element={<HTMLPageStructure />} />
                <Route path="/html-list" element={<ListTags />} />
                <Route path="/html-table" element={<TableTags />} />
                <Route path="/html-image" element={<Images />} />
                <Route path="/html-hyperlinks" element={<Hyperlinks />} />
                <Route path="/html-block-element" element={<InlineBlockElement />} />
                <Route path="/html-form" element={<Forms />} />
                <Route path="/html-style" element={<HTMLStyling />} />

                {/* CSS Content */}
                <Route path="/css-transition" element={<CSSTransition />} />
                <Route path="/css_animation" element={<Animation />} />
                <Route path="/css_attribute" element={<AttributesSelector />} />
                <Route path="/css_background" element={<Background />} />
                <Route path="/css_border" element={<Borders />} />
                <Route path="/css_boxmodel" element={<BoxModel />} />
                <Route path="/css_boxshadow" element={<BoxShadow />} />
                <Route path="/css_color" element={<Colors />} />
                <Route path="/css_conbinator" element={<Combinators />} />
                <Route path="/css_introduction" element={<CSSIntroduction />} />
                <Route path="/css_syntax" element={<CSSSyntax />} />
                <Route path="/css_display" element={<DisplayLayout />} />
                <Route path="/css_flexbox" element={<FlexboxLayout />} />
                <Route path="/css_grid" element={<GridLayout />} />
                <Route path="/css_width" element={<HeightWidth />} />
                <Route path="/css_icon" element={<Icons />} />
                <Route path="/css_insert" element={<InsertingCSS />} />
                <Route path="/css_links" element={<Links />} />
                <Route path="/css_lists" element={<Lists />} />
                <Route path="/css_mediaquery" element={<MediaQuery />} />
                <Route path="/css_navbar" element={<NavigationBar />} />
                <Route path="/css_opacity" element={<Opacity />} />
                <Route path="/css_overflow" element={<OverflowLayout />} />
                <Route path="/css_portfolio" element={<PortfolioProject />} />
                <Route path="/css_position" element={<PositionLayout />} />
                <Route path="/css_pseudoclass" element={<PseudoClasses />} />
                <Route path="/css_pseudoelement" element={<PseudoElements />} />
                <Route path="/css_selectors" element={<Selectors />} />
                <Route path="/css_form" element={<StylingForms />} />
                <Route path="/css_table" element={<Tables />} />
                <Route path="/css_formatting" element={<TextFormatting />} />
                <Route path="/css_transform" element={<Transform />} />
                <Route path="/css_transition" element={<Transition />} />

                {/* JS Content */}
                <Route path="/js-transition" element={<JSTransition />} />
                <Route path="/js-intro" element={<JavascriptIntro />} />
                <Route path="/js-linking" element={<LinkingJavascript />} />
                <Route path="/js-alert" element={<Alert />} />
                <Route path="/js-statements" element={<Statements />} />
                <Route path="/js-variables" element={<Variables />} />
                <Route path="/js-naming-variables" element={<NamingVariables />} />
                <Route path="/js-constant" element={<Constant />} />
                <Route path="/js-data-types" element={<DataTypes />} />
                <Route path="/js-strings" element={<Strings />} />
                <Route path="/js-numbers" element={<Numbers />} />
                <Route path="/js-bigInt" element={<BigInt />} />
                <Route path="/js-boolean" element={<Boolean />} />
                <Route path="/js-null" element={<Null />} />
                <Route path="/js-typeOf" element={<TypeOf />} />
                <Route path="/js-browser-user-interaction" element={<BrowserUserInteraction />} />
                <Route path="/js-string-conversion" element={<StringConversion />} />
                <Route path="/js-number-conversion" element={<NumberConversion />} />
                <Route path="/js-boolean-conversion" element={<BooleanConversion />} />
                <Route path="/js-basic-operators" element={<BasicOperators />} />
                <Route path="/js-maths-operators" element={<MathsOperators />} />
                <Route path="/js-string-concatenation" element={<StringConcatenation />} />
                <Route path="/js-unary-conversion" element={<UnaryConversion />} />
                <Route path="/js-assignment-operator" element={<AssignmentOperator />} />
                <Route path="/js-increment-decrement" element={<IncrementDecrement />} />
                <Route path="/js-number-comparison" element={<NumberComparison />} />
                <Route path="/js-string-comparison" element={<StringComparison />} />
                <Route path="/js-mixed-comparison" element={<MixedComparison />} />

                <Route path="/js-or-operator" element={<OrOperator />} />
                <Route path="/js-and-operator" element={<AndOperator />} />
                <Route path="/js-not-operator" element={<NotOperator />} />
                <Route path="/js-nullish-operator" element={<NullishOperator />} />
                <Route path="/js-if-statement" element={<IfStatement />} />
                <Route path="/js-elseif-statement" element={<ElseifStatement />} />
                <Route path="/js-switch-statement" element={<SwitchStatement />} />
                <Route path="/js-while-loop" element={<WhileLoop />} />
                <Route path="/js-for-loop" element={<ForLoop />} />
                <Route path="/js-breaking-loop" element={<BreakingLoop />} />
                <Route path="/js-continue-loop" element={<ContinueLoop />} />
                <Route path="/js-function-declaration" element={<FunctionDeclaration />} />
                <Route path="/js-local-global-variables" element={<LocalGlobalVariables />} />
                <Route path="/js-function-parameters" element={<FunctionParameters />} />
                <Route path="/js-return-function" element={<ReturnFunction />} />
                <Route path="/js-naming-functions" element={<NamingFunctions />} />
                <Route path="/js-function-expression" element={<FunctionExpression />} />
                <Route path="/js-arrow-function" element={<ArrowFunction />} />
                <Route path="/js-objects" element={<Objects />} />
                <Route path="/js-dot-notation" element={<DotNotation />} />
                <Route path="/js-square-bracket-notation" element={<SquareBracketNotation />} />
                <Route path="/js-property-existence" element={<PropertyExistence />} />
                <Route path="/js-object-loops" element={<ObjectLoops />} />
                <Route path="/js-object-referencing" element={<ObjectReferencing />} />
                <Route path="/js-cloning-object" element={<CloningObject />} />
                <Route path="/js-object-methods" element={<ObjectMethods />} />
                <Route path="/js-array-declaration" element={<ArrayDeclaration />} />
                <Route path="/js-array-indexing" element={<ArrayIndexing />} />
                <Route path="/js-array-length" element={<ArrayLength />} />
                <Route path="/js-multiple-typed-array" element={<MultipleTypedArray />} />
                <Route path="/js-array-loops" element={<ArrayLoops />} />
                <Route path="/js-pop-shift-methods" element={<PopShiftMethods />} />
                <Route path="/js-slice-method" element={<SliceMethod />} />
                <Route path="/js-splice-method" element={<SpliceMethod />} />

              </Route>

              {/* JavaScript Content - Requires jsAccess and release schedule */}
              <Route element={<CourseAccessRoute courseType="js" />}>

              </Route>
            </Route>


          </Route>
          
          <Route path="*" element={<NotFoundScreen />} />
          <Route path="/no-access" element={<NoAccess />} />






          <Route path="/animate" element={<LoadingAnimation />} />

        </Routes>
        
        
      </div>
    </Router>
    </ErrorBoundary>
  )
}

export default App
