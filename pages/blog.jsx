import Layout from "../src/layouts/Layout";
import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();

  const redirectToExternalBlog = () => {
    // Redirect to the external blog URL
    window.location.href = "https://blog.kylerobins.com";
  };

  return (
    <Layout>
      {/* Section Started Heading */}
      {/* ... (unchanged code) ... */}

      {/* Section - Blog */}
      <div className="section section-inner m-archive">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              {/* Blog Items */}
              <div className="articles-container">
                {/* ... (unchanged code) ... */}
              </div>
              <div className="pager">
                <span className="page-numbers current">1</span>
                <a className="page-numbers" href="#">
                  2
                </a>
                <a className="next page-numbers" href="#">
                  Next
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              {/* sidebar */}
              <div
                className="col__sedebar scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="content-sidebar">
                  <aside className="widget-area">
                    <div className="widget widget_block widget_search">
                      {/* ... (unchanged code) ... */}
                    </div>
                    <section className="widget widget_block">
                      {/* ... (unchanged code) ... */}
                    </section>
                    <section className="widget widget_block">
                      {/* ... (unchanged code) ... */}
                    </section>
                    <section className="widget widget_block">
                      {/* ... (unchanged code) ... */}
                    </section>
                    <section className="widget widget_block">
                      {/* ... (unchanged code) ... */}
                    </section>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <div className="v-line-left v-line-top">
            <div className="v-line-block">
              <span />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
