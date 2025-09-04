<div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f9f9f9; color: #222; padding: 2rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.07); max-width: 900px; margin: auto;">
	<h1 style="font-size: 2.8rem; font-weight: 900; color: #1a202c; margin-bottom: 0.5em; letter-spacing: -2px;">📝 Minima Blog</h1>
	<p style="font-size: 1.2rem; color: #444; margin-bottom: 1.5em;">A modern, minimalist fullstack blog platform built with <b>React</b>, <b>Vite</b>, <b>TailwindCSS</b>, <b>Redux</b>, and <b>Appwrite</b> as the backend server. Effortlessly create, edit, and share beautiful posts with a clean, distraction-free interface.</p>

    <h2 style="font-size: 2rem; color: #2b6cb0; margin-top: 2em; margin-bottom: 0.5em;">✨ Features</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 1.5em;">
    	<li><b>Fullstack</b> architecture powered by Appwrite (database, auth, storage)</li>
    	<li>Minimalist, responsive UI with custom fonts and smooth layouts</li>
    	<li>Rich text editor for writing posts</li>
    	<li>Authentication (signup, login, logout)</li>
    	<li>Post CRUD: create, edit, delete, view</li>
    	<li>Image upload and preview for posts</li>
    	<li>Tag selection and filtering</li>
    	<li>Loader and feedback components for smooth UX</li>
    	<li>404 page and protected routes</li>
    </ul>

    <h2 style="font-size: 2rem; color: #2b6cb0; margin-top: 2em; margin-bottom: 0.5em;">🚀 Getting Started</h2>
    <ol style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 1.5em;">
    	<li>Clone the repository:<br><code style="background: #eee; padding: 2px 6px; border-radius: 4px;">git clone https://github.com/MAhmad25/BlogWeb.git</code></li>
    	<li>Install dependencies:<br><code style="background: #eee; padding: 2px 6px; border-radius: 4px;">npm install</code></li>
    	<li>Configure your <b>Appwrite</b> server and update <code>src/config/Keys.js</code> with your credentials.</li>
    	<li>Start the development server:<br><code style="background: #eee; padding: 2px 6px; border-radius: 4px;">npm run dev</code></li>
    </ol>

    <h2 style="font-size: 2rem; color: #2b6cb0; margin-top: 2em; margin-bottom: 0.5em;">🛠️ Tech Stack</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 1.5em;">
    	<li><b>Frontend:</b> React, Vite, TailwindCSS, Redux, React Router, Styled Components</li>
    	<li><b>Backend:</b> Appwrite (Database, Auth, Storage)</li>
    	<li><b>Other:</b> GSAP (animations), Tinymce (rich text editor), React Hot Toast (notifications)</li>
    </ul>

    <h2 style="font-size: 2rem; color: #2b6cb0; margin-top: 2em; margin-bottom: 0.5em;">📁 Project Structure</h2>
    <pre style="background: #f4f4f4; padding: 1em; border-radius: 8px; font-size: 1rem; color: #333; overflow-x: auto;">

src/
app/ # Appwrite service logic (CRUD, storage)
components/ # UI components (Nav, Footer, Post, RTE, etc.)
config/ # Keys and config files
hooks/ # Custom React hooks
pages/ # Page components (Home, Login, Signup, ViewPost, etc.)
Routes/ # Route protection and app routing
store/ # Redux store and slices
utils/ # Utility functions

</pre>

    <h2 style="font-size: 2rem; color: #2b6cb0; margin-top: 2em; margin-bottom: 0.5em;">🔒 Authentication & Backend</h2>
    <p style="font-size: 1.1rem; margin-bottom: 1.5em;">All authentication, post management, and file storage are handled via <b>Appwrite</b>. You must set up your own Appwrite server and update <code>src/config/Keys.js</code> with your project, database, and bucket IDs.</p>

    <h2 style="font-size: 2rem; color: #2b6cb0; margin-top: 2em; margin-bottom: 0.5em;">🎨 UI & Styling</h2>
    <p style="font-size: 1.1rem; margin-bottom: 1.5em;">The UI is crafted with a focus on minimalism and readability. Custom fonts, inline styles, and TailwindCSS are used for a modern look. Components are modular and easy to extend.</p>

    <h2 style="font-size: 2rem; color: #2b6cb0; margin-top: 2em; margin-bottom: 0.5em;">🙌 Contributing</h2>
    <p style="font-size: 1.1rem; margin-bottom: 1.5em;">Pull requests and suggestions are welcome! Please open issues for bugs or feature requests.</p>

    <h2 style="font-size: 2rem; color: #2b6cb0; margin-top: 2em; margin-bottom: 0.5em;">📄 License</h2>
    <p style="font-size: 1.1rem; margin-bottom: 1.5em;">This project is open source under the MIT License.</p>

    <hr style="margin: 2em 0; border: none; border-top: 1px solid #ddd;">
    <p style="font-size: 1.1rem; color: #888; text-align: center;">Made with ❤️ by Ahmad Latif</p>

</div>
