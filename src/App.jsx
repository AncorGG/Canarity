import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Activity from "./pages/activity/main/Activity";
import HealthPage from "./pages/health/main/HealthPage";
import Feed from "./pages/feed/Feed";
import ConsultPage from "./pages/health/seccondary/ConsultPage";
import Editor from "./pages/activity/seccondary/Editor";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<HomePage />}/>
				<Route path="/activity" element={<Activity />}/>
				<Route path="/editor/:key" element={<Editor />}/>
				<Route path="/health" element={<HealthPage />}/>
				<Route path="/feed" element={<Feed />}/>
				<Route path="/consults" element={<ConsultPage />}/>
				<Route path="/consults/:medic/:url" element={<ConsultPage />}/>
				<Route path="*" element={<HomePage />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
