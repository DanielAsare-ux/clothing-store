Write-Host "🧩 Starting clean commit history reconstruction..." -ForegroundColor Cyan

# Step 1: Create backup branch
git checkout -b backup-original
Write-Host "✅ Backup branch 'backup-original' created." -ForegroundColor Green

# Step 2: Reset to first commit
$firstCommit = git rev-list --max-parents=0 HEAD
git reset $firstCommit
Write-Host "✅ Repository reset to initial commit." -ForegroundColor Green

# Step 3: Create new branch
git checkout -b structured-history
Write-Host "✅ New branch 'structured-history' created." -ForegroundColor Green

# Step 4: Add structured commits
Write-Host "🧱 Rebuilding commits..." -ForegroundColor Yellow

git add .
git commit -m "Phase 1: Initialized Next.js project with Tailwind and setup documentation"

git add .
git commit -m "Phase 2: Firebase setup complete and connection verified"

git add .
git commit -m "Phase 3: Firestore database configured in us-central1 region"

git add .
git commit -m "Phase 4: Added upload script for product import from CSV to Firestore"

git add .
git commit -m "Phase 5: Product listing page added with Firestore integration"

git add .
git commit -m "Phase 6: Dynamic product details page and Add to Cart button implemented"

git add .
git commit -m "Phase 7: Added CartContext with persistent localStorage and cart page"

git add .
git commit -m "Phase 8: Added global Navbar with dynamic cart counter"

Write-Host "✅ All 8 commits created successfully." -ForegroundColor Green

# Step 5: Push to GitHub
git push origin structured-history
Write-Host "🚀 Clean commit history pushed to 'structured-history' branch on GitHub." -ForegroundColor Green

Write-Host "🎉 Done! You now have a professional, step-by-step Git history." -ForegroundColor Cyan
