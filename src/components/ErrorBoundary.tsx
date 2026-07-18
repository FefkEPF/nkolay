import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: { componentStack: string }) {
    console.error("ErrorBoundary caught:", error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="min-h-screen flex items-center justify-center bg-surface px-6">
            <div className="max-w-md w-full bg-white border border-gray-200/60 rounded-3xl p-8 text-center shadow-[var(--shadow-card)]">
              <div className="w-14 h-14 rounded-full bg-primary-light border border-primary/10 flex items-center justify-center mx-auto mb-5">
                <span className="text-primary text-xl font-bold">!</span>
              </div>
              <h2 className="font-display font-bold text-xl text-gray-900 mb-2">Bir şeyler ters gitti</h2>
              <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
                Sayfa yüklenirken beklenmeyen bir hata oluştu. Lütfen sayfayı yenileyin veya ana sayfaya dönün.
              </p>
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                  window.location.href = "/";
                }}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold text-[15px] px-8 py-3.5 rounded-full hover:bg-primary-dark transition-all"
              >
                Ana Sayfaya Dön
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
